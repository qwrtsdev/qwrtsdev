import { getSpotifyToken } from "@/utils/spotify";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const playlistId = searchParams.get("playlist");
    const token = await getSpotifyToken();

    const res = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!res.ok) {
        return new Response(
        JSON.stringify({ error: "ไม่สามารถโหลดข้อมูลได้" }),
        { status: res.status }
        );
    }

    const playlist = await res.json();
    const tracks = playlist.tracks.items.map(({ track }) => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map((a) => a.name),
        image: track.album.images[0]?.url ?? null,
        preview_url: track.preview_url,
    }));

    return new Response(JSON.stringify({ tracks }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
