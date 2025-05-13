import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Disc({ track }) {
    return (
        <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-0 sm:p-4"
        >
            <div className="flex flex-col gap-4">
                <AspectRatio ratio={1 / 1} className="w-full">
                    <div className="relative h-full w-full">
                        <Image
                            src={track.image}
                            alt={`${track.name} – ${track.artists.join(", ")}`}
                            title={`${track.name} – ${track.artists.join(", ")}`}
                            fill
                            className="rounded-md object-cover shadow-md transition-transform duration-200 group-hover:scale-105"
                        />
                    </div>
                </AspectRatio>

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
