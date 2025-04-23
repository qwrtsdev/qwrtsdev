"use client";

import { useState, useEffect, useRef } from "react";

export default function SongPreview({ trackUrl }) {
    const [track, setTrack] = useState(null);
    const audioRef = useRef();

    const match = trackUrl.match(/track\/([A-Za-z0-9]+)/);
    const id = match ? match[1] : null;

    useEffect(() => {
        if (!id) return;
        fetch(`/api/tracks/${id}`)
            .then((res) => res.json())
            .then(setTrack)
            .catch(console.error);
    }, [id]);

    if (!id) return <div>Invalid Spotify URL</div>;
    if (!track) return <div>Loading…</div>;

    return (
        <div style={{ marginBottom: 20 }}>
            <h3>{track.name}</h3>
            <p>By {track.artists}</p>
            {track.preview_url ? (
                <>
                    <audio
                        ref={audioRef}
                        src={track.preview_url}
                        controls
                        style={{ width: "100%" }}
                    />
                </>
            ) : (
                <p>No preview available.</p>
            )}
        </div>
    );
}
