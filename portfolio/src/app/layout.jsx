import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const LineSeed = localFont({
    src: [
        {
            path: "../../public/LINESeedSansTH_W_Rg.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/LINESeedSansTH_W_Bd.woff2",
            weight: "700",
            style: "bold",
        },
    ],
});

export const metadata = {
    title: {
        default: "QWRTSDEV",
        template: "%s | QWRTSDEV",
    },
    description:
        "A passionate programmer and graphic designer. Who wants to create well-crafted softwares that seamlessly blends functionality with aesthetics.",
    openGraph: {
        title: "QWRTSDEV",
        description:
            "A passionate programmer and graphic designer. Who wants to create well-crafted softwares that seamlessly blends functionality with aesthetics.",
        url: "https://qwrtsdev.xyz/",
        siteName: "QWRTSDEV",
        images: [
            {
                url: "https://qwrtsdev.xyz/qw-opengraph.png",
                width: 2048,
                height: 1070,
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        domain: "qwrtsdev.xyz",
        title: "QWRTSDEV",
        description:
            "A passionate programmer and graphic designer. Who wants to create well-crafted softwares that seamlessly blends functionality with aesthetics.",
        image: "https://qwrtsdev.xyz/qw-opengraph.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${LineSeed.className} relative h-screen w-screen overflow-hidden bg-zinc-50 antialiased`}
            >
                <div className="scrollbar-hide h-full w-full overflow-auto">
                    {children}
                    <SpeedInsights />
                    <Analytics />
                </div>
            </body>
        </html>
    );
}
