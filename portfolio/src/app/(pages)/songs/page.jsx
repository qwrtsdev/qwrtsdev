import Card from "@/components/global/Card";
import Footer from "@/components/global/Footer";
import Link from "next/link";
import { Music, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Songs",
};

export default function Songs() {
    return (
        <div className="h-full items-center justify-center">
            <div className="4xl:px-0 flex w-full items-center justify-center px-4">
                <div className="w-full max-w-4xl border-l border-r border-zinc-300">
                    <div className="flex flex-col gap-4 p-6">
                        <span>
                            <h2 className="text-2xl font-bold">SONGS</h2>
                            <p>รวมเพลงที่ชอบทั้งหมด (ลองฟังตามดู)</p>
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

                    <div className="grid grid-cols-1 grid-rows-3 gap-4 border-t border-zinc-300 p-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
                        <div className=""></div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
