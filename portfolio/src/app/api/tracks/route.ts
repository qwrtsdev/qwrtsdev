import { getSpotifyToken } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server";
import { Track } from "@/types/spotify";

export async function GET(req: NextRequest): Promise<NextResponse> {
    const { searchParams } = new URL(req.url);
    const playlistId = searchParams.get("playlist");
    const token = await getSpotifyToken();

    if (!playlistId) {
        return new NextResponse(JSON.stringify({ 
            error: "ขาดพารามิเตอร์ playlist" 
        }), { 
            status: 400, 
            headers: { "Content-Type": "application/json" } 
        });
    }

    const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers: { Authorization: `Bearer ${token}` }});

    if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        
        return new NextResponse(JSON.stringify({ 
            error: "ไม่สามารถโหลดข้อมูลได้", 
            details: errorBody 
        }), { 
            status: res.status, 
            headers: { "Content-Type": "application/json" } 
        });
    }

    const playlist = await res.json();
    const tracks: Track[] = playlist.tracks.items.map(({ track }: any) => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map((a: any) => a.name),
        image: track.album.images[0]?.url || undefined,
        url: track.external_urls.spotify || undefined,
    }));

    return new NextResponse(JSON.stringify({ tracks }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
