"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LoaderCircle } from "lucide-react";

export default function SpotifySection() {
    const [tracks, setTracks] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `/api/tracks?playlist=${process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID}`,
        )
            .then((res) => res.json())
            .then((json) => {
                const topThree = (json.tracks || []).slice(0, 3);
                setTracks(topThree);

                if (topThree.length) setSelected(topThree[0]);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center border-t border-zinc-300 py-8 text-center font-bold text-zinc-950 lg:flex-row">
                <LoaderCircle
                    color="#09090b"
                    size={12}
                    className="mr-1 inline animate-spin"
                />{" "}
                กำลังโหลด..
            </div>
        );
    }

    return (
        <div className="flex flex-col-reverse overflow-hidden border-t border-zinc-300 lg:flex-row">
            <div className="border-r-0 border-zinc-300 lg:w-2/3 lg:border-r">
                <div className="flex w-full flex-col gap-3 px-6 pt-6">
                    {tracks.map((t) => (
                        <div
                            key={t.id}
                            className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-100 p-4 transition-transform duration-200 hover:scale-[1.020]"
                            onMouseEnter={() => setSelected(t)}
                        >
                            <div>
                                <h4 className="font-semibold text-zinc-900">
                                    {t.name}
                                </h4>
                                <p className="text-sm text-zinc-600">
                                    {t.artists.join(", ")}
                                </p>
                            </div>

                            <a
                                href={t.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/spotify-color-icon.svg"
                                    alt="ดูบน Spotify"
                                    width="32"
                                    height="32"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="">
                    <Link
                        href="/songs"
                        className="group text-center text-sm text-zinc-900 hover:underline"
                    >
                        <p className="py-4">
                            ดูเพลงทั้งหมด{" "}
                            <ArrowRight
                                className="inline ease-in-out group-hover:translate-x-1 group-hover:transition-transform"
                                size={14}
                            />
                        </p>
                    </Link>
                </div>
            </div>

            <div className="flex w-full items-center justify-center px-6 pt-6 lg:w-1/3 lg:pb-6">
                {selected?.image ? (
                    <div className="relative w-full max-w-sm aspect-square">
                        <Image
                            src={selected.image}
                            alt={selected.name}
                            className="rounded-lg object-cover shadow"
                            fill
                        />
                    </div>
                ) : (
                    <div className="bg-300 h-full w-full max-w-sm animate-pulse rounded-lg object-cover shadow" />
                )}
            </div>
        </div>
    );
}
