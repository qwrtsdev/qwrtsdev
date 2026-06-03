import { getFullYear } from "@/utils/dates";
import { socials } from "@/data/data.json";
import Image from "next/image";

export default function Footer() {
    const fullYear = getFullYear();

    return (
        <footer
                className="max-w-xl w-full flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 pb-8 select-none"
            >
                <div className="w-full flex flex-col text-xs gap-1">
                    <div className="flex flex-row">
                        <p className="text-neutral-900">
                            © {fullYear}
                            qwrtsdev. All rights reserved.
                        </p>
                        <a
                            href="https://webring.wonderful.software/#qwrtsdev.xyz"
                            title="วงแหวนเว็บ"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                alt="วงแหวนเว็บ"
                                width="18"
                                height="18"
                                src="https://webring.wonderful.software/webring.black.svg"
                                className="ml-2 transition-transform duration-200 hover:rotate-12 hover:scale-125"
                            />
                        </a>
                    </div>
                    <div className="flex flex-row gap-2 text-neutral-500">
                        <a href="https://me.qwrtsdev.xyz" target="_blank"
                            >เกี่ยวกับผม</a
                        >
                        |
                        <a
                            href="https://blog.qwrtsdev.xyz/blogs"
                            target="_blank">บล็อก</a
                        >
                        |
                        <a href="https://status.qwrtsdev.xyz" target="_blank"
                            >สถานะ</a
                        >
                    </div>
                </div>

                {
                  socials ? (
                    <div className="flex flex-row gap-3 items-center">
                      {socials.map((social) => (
                        <a
                          key={social.url}
                          href={social.url}
                          target="_blank"
                          className="text-neutral-900"
                        >
                          
                        </a>
                      ))}
                    </div>
                  ) : null
                }
            </footer>
    );
}
