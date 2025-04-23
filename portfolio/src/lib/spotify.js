let accessToken = null;
let tokenExpiresAt = null;

export async function getSpotifyToken() {
    const now = Date.now();

    if (accessToken && tokenExpiresAt && now < tokenExpiresAt) {
        return accessToken;
    }

    const resp = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
                "Basic " +
                Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString("base64"),
        },
        body: new URLSearchParams({ grant_type: "client_credentials" }),
    });

    if (!resp.ok) throw new Error("Failed to get Spotify token");
    const { access_token, expires_in } = await resp.json();

    // Save token + expiry time
    accessToken = access_token;
    tokenExpiresAt = now + expires_in * 1000 - 10000; // minus 10s buffer

    return accessToken;
}
