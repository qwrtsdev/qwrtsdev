import { getSpotifyToken } from "@/lib/spotify";

export async function GET(req, { params }) {
    const { id } = params;

    try {
        const token = await getSpotifyToken();
        const trackRes = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!trackRes.ok) {
            return new Response(JSON.stringify({ error: "Could not fetch track" }), { status: trackRes.status });
        }

        const { name, artists, preview_url } = await trackRes.json();

        return new Response(JSON.stringify({
            name,
            artists: artists.map((a) => a.name).join(", "),
            preview_url,
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
