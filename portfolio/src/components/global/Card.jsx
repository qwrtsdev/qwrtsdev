"client";

import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export default function GridItems({ thumbnail, title, link, featured, tags }) {
    const Wrapper = link ? "a" : "div";

    return (
        <Wrapper
            {...(link
                ? { href: link, rel: "noopener noreferrer", target: "_blank" }
                : {})}
            className="group overflow-hidden rounded-lg bg-zinc-900 transition-transform duration-200 hover:scale-105"
        >
            <AspectRatio ratio={16 / 9} className="relative overflow-hidden">
                {featured ? (
                    <span className="absolute left-2 top-2 z-10 rounded-full bg-zinc-800 bg-opacity-60 px-2 py-1 text-xs text-zinc-50">
                        แนะนำ
                    </span>
                ) : null}

                <Image
                    src={thumbnail || null}
                    alt={title || "N/A"}
                    sizes="100vw"
                    layout="fill"
                    objectFit="cover"
                />

                {link ? (
                    <span className="absolute bottom-2 right-2 z-10">
                        <img
                            src="/newtab-icon.svg"
                            alt="New Tab Icon"
                            className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                    </span>
                ) : null}
            </AspectRatio>

            <div className="p-4">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-zinc-50">
                    {title || "N/A"}
                    {tags ? (
                        <span className="flex flex-wrap gap-2 pt-1 text-zinc-400">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs font-light"
                                >
                                    {tag}
                                </span>
                            ))}
                        </span>
                    ) : null}
                </p>
            </div>
        </Wrapper>
    );
}
