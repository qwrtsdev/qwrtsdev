import axios from "axios";
import { AxiosResponse } from "axios";

let accessToken: string | null;
let tokenExpiresAt: number | null;

export async function getSpotifyToken(): Promise<string> {
    const now: number = Date.now();

    if (accessToken && tokenExpiresAt && now < tokenExpiresAt) {
        return accessToken;
    }

    const resp: AxiosResponse = await axios.post(
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
