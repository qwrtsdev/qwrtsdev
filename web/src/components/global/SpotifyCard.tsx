import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Track } from "@/types/spotify";

export default function SpotifyCard({ track }: { track: Track }) {
    return (
        <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-visible p-0 sm:p-4"
        >
            <div className="flex flex-col gap-4">
                <div className="relative w-full overflow-visible">
                    <AspectRatio ratio={1 / 1} className="w-full">
                        <Image
                            src={track.image}
                            alt={`${track.name} – ${track.artists.join(", ")}`}
                            title={`${track.name} – ${track.artists.join(", ")}`}
                            fill
                            className="relative z-10 rounded-md object-cover shadow-md transition-transform duration-200 group-hover:scale-105"
                        />
                    </AspectRatio>

                    <div className="xs:group-hover:-translate-y-20 pointer-events-none absolute left-0 top-0 z-0 flex h-full w-full transform items-center justify-center overflow-visible opacity-0 transition-all duration-300 group-hover:-translate-y-16 group-hover:opacity-100 sm:group-hover:-translate-y-20 md:group-hover:-translate-y-20">
                        <div className="relative h-3/4 w-3/4">
                            <Image
                                src="/images/disc.png"
                                alt="Disc"
                                fill
                                className="animate-spin rounded-full object-cover shadow-md"
                            />
                        </div>
                    </div>
                </div>

                <div className="min-w-0">
                    <p className="text-md overflow-hidden truncate whitespace-nowrap font-bold">
                        {track.name}
                    </p>
                    <p className="overflow-hidden truncate whitespace-nowrap text-sm text-zinc-600">
                        {track.artists.join(", ")}
                    </p>
                </div>
            </div>
        </a>
    );
}
