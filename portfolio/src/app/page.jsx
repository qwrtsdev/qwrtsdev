import Aurora from "@/components/reactbits/Aurora";
import Image from "next/image";
import Link from "next/link";
import { MessageSquareMore, Github, Globe } from "lucide-react";

export default function Home() {
    return (
        <main className="flex h-[100dvh] items-center justify-center">
            <Aurora
                colorStops={["#8a8a8a", "#292929", "#525252"]}
                blend={0.5}
                amplitude={1.0}
                speed={1}
                className="h-full"
            />

            <div className="absolute z-10">
                <div className="flex flex-col rounded-lg border border-zinc-500 border-opacity-50 bg-gray-500 bg-opacity-0 bg-clip-padding p-8 backdrop-blur-2xl backdrop-contrast-100 backdrop-saturate-100 backdrop-filter">
                    <div className="relative mb-8 h-8 w-full">
                        <Image
                            src={"/qw-cropped-white.png"}
                            alt={"qwrtsdev_logo"}
                            sizes="100vw"
                            layout="fill"
                            objectFit="contain"
                            priority={true}
                            className=""
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="text-center text-xs font-thin text-zinc-100">
                            <p>you're here. thanks for visiting.</p>
                            <p>but there's nothing for you. maybe later?</p>
                        </div>
                        <div className="flex flex-row gap-3 text-center">
                            <Link
                                href="https://discord.gg/JKsYSd4TVf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageSquareMore
                                    color="#f4f4f5"
                                    size={18}
                                    strokeWidth={1.25}
                                    className="inline"
                                />
                            </Link>
                            <Link
                                href="https://github.com/qwrtsdev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github
                                    color="#f4f4f5"
                                    size={18}
                                    strokeWidth={1.25}
                                    className="inline"
                                />
                            </Link>
                            <Link
                                href="https://linktr.ee/qwrts"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Globe
                                    color="#f4f4f5"
                                    size={18}
                                    strokeWidth={1.25}
                                    className="inline"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
