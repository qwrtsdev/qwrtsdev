import { getSpotifyToken } from "@/utils/spotify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
    const { searchParams } = new URL(req.url);
    const playlistId = searchParams.get("playlist");

    if (!playlistId) {
        return new NextResponse(JSON.stringify({ error: "ขาดพารามิเตอร์ `playlist`" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const token = await getSpotifyToken();
    const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers: { Authorization: `Bearer ${token}` }});

    if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        
        return new NextResponse(JSON.stringify({ error: "ไม่สามารถโหลดข้อมูลได้", details: errorBody }), { status: res.status, headers: { "Content-Type": "application/json" } });
    }

    const playlist = await res.json();
    const tracks = playlist.tracks.items.map(({ track }) => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map(a => a.name),
        image: track.album.images[0]?.url ?? null,
        url: track.external_urls.spotify
    }));

    return new NextResponse(JSON.stringify({ tracks }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
