export interface Track {
    id: string;
    name: string;
    artists: string[];
    image?: string;
    url?: string;
}

export interface SpotifyPlaylistResponse {
    tracks: Track[];
}

export interface SpotifyApiError {
    error: string;
    details?: any;
}
