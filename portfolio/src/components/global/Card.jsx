import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export default function Card({ title, thumbnail, link, featured, tags }) {
    const CardContent = (
        <div className="group overflow-hidden rounded-lg bg-zinc-900 transition-transform duration-200 hover:scale-105">
            <AspectRatio ratio={16 / 9} className="relative overflow-hidden">
                {featured && (
                    <span className="absolute left-2 top-2 z-10 rounded-full bg-zinc-800 bg-opacity-60 px-2 py-1 text-xs text-zinc-50">
                        แนะนำ
                    </span>
                )}

                <Image
                    src={thumbnail || "/images/default.webp"}
                    alt={title || "default thumbnail"}
                    sizes="100vw"
                    layout="fill"
                    objectFit="cover"
                />

                {link && (
                    <span className="absolute bottom-2 right-2 z-10">
                        <img
                            src="/icons/newtab-icon.svg"
                            alt="New Tab Icon"
                            className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                    </span>
                )}
            </AspectRatio>

            <div className="p-4">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-zinc-50">
                    {title || "N/A"}
                </p>

                {tags && (
                    <span className="flex flex-wrap gap-2 pt-1 text-zinc-400">
                        {tags.map((tag, index) => (
                            <span key={index} className="text-xs font-light">
                                {tag}
                            </span>
                        ))}
                    </span>
                )}
            </div>
        </div>
    );

    return link ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            {CardContent}
        </a>
    ) : (
        <div>{CardContent}</div>
    );
}
