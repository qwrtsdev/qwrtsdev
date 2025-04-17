import { getFullYear } from "@/utils/dates";

export default function Footer() {
    const fullYear = getFullYear();

    return (
        <footer className="border-t border-zinc-300">
            <div className="flex items-center justify-center py-5 text-center text-xs text-zinc-600">
                © {fullYear} qwrtsdev. All rights reserved.
                <a
                    href="https://webring.wonderful.software/#qwrtsdev.xyz"
                    title="วงแหวนเว็บ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        alt="วงแหวนเว็บ"
                        width="18"
                        height="18"
                        src="https://webring.wonderful.software/webring.black.svg"
                        className="ml-2 transition-transform duration-200 hover:rotate-12 hover:scale-125"
                    />
                </a>
            </div>
        </footer>
    );
}
