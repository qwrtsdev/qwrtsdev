"use client";

import Footer from "@/components/global/Footer";
import Link from "next/link";
import { Music, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Disc from "@/components/global/Disc";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Songs() {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `/api/tracks?playlist=${process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID}`,
        )
            .then((res) => res.json())
            .then((json) => {
                setTracks(json.tracks);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    const items = loading
        ? Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="group p-0 sm:p-4">
                  <div className="flex flex-col gap-5">
                      <AspectRatio ratio={1 / 1} className="w-full">
                          <div className="relative h-full w-full">
                              <div className="h-full w-full animate-pulse rounded-md bg-zinc-200 shadow-md" />
                          </div>
                      </AspectRatio>

                      <div className="min-w-0">
                          <div className="mb-1 h-5 animate-pulse rounded bg-zinc-200" />
                          <div className="h-4 animate-pulse rounded bg-zinc-200" />
                      </div>
                  </div>
              </div>
          ))
        : tracks.map((t) => <Disc key={t.id} track={t} className="" />);

    return (
        <div className="h-full items-center justify-center">
            <div className="4xl:px-0 flex w-full items-center justify-center px-4">
                <div className="w-full max-w-4xl border-l border-r border-zinc-300">
                    <div className="flex flex-col gap-4 p-6">
                        <span>
                            <h2 className="text-2xl font-bold">SONGS</h2>
                            <p>รวมเพลง (ไม่) ทั้งหมดที่ผมชอบ</p>
                        </span>

                        <div className="flex flex-col gap-1">
                            <a
                                href="https://open.spotify.com/playlist/5Ruk4LEhjCofK2TQGEe5KP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group max-w-max items-center justify-center text-sm hover:underline"
                            >
                                <Music
                                    className="inline ease-in-out group-hover:-translate-x-1 group-hover:transition-transform"
                                    size={14}
                                />{" "}
                                ดูเพลย์ลิสต์บน Spotify
                            </a>

                            <Link
                                href="/"
                                className="group max-w-max items-center justify-center text-sm hover:underline"
                            >
                                <ArrowLeft
                                    className="inline ease-in-out group-hover:-translate-x-1 group-hover:transition-transform"
                                    size={14}
                                />{" "}
                                กลับไปที่หน้าแรก
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-1 gap-6 border-t border-zinc-300 p-6 sm:grid-cols-3 sm:gap-0 sm:p-4 md:grid-cols-4">
                        {items}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
