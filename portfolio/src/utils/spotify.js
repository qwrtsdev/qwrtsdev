import axios from "axios";

let accessToken = null;
let tokenExpiresAt = null;

export async function getSpotifyToken() {
    const now = Date.now();

    if (accessToken && tokenExpiresAt && now < tokenExpiresAt) {
        return accessToken;
    }

    const resp = await axios.post(
        "https://accounts.spotify.com/api/token",
        
        new URLSearchParams({ grant_type: "client_credentials" }),
        
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64"),
            },
        }
    );

    const { access_token, expires_in } = resp.data;

    accessToken = access_token;
    tokenExpiresAt = now + expires_in * 1000 - 10000;

    return accessToken;
}
