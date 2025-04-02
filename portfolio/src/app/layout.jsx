import localFont from "next/font/local";
import "./globals.css";

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
        url: "https://qwrtsdev.vercel.app/",
        siteName: "QWRTSDEV",
        images: [
            {
                url: "https://cdn.discordapp.com/attachments/1297492873398452267/1337792308757794907/qw-opengraph.png?ex=67ee9b2d&is=67ed49ad&hm=642986e7b228cf708dbb8a8dbe5374887d893bc9f122f626656043469ea3f8de&",
                width: 2048,
                height: 1070,
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        domain: "qwrtsdev.vercel.app",
        title: "QWRTSDEV",
        description:
            "A passionate programmer and graphic designer. Who wants to create well-crafted softwares that seamlessly blends functionality with aesthetics.",
        image: "https://cdn.discordapp.com/attachments/1297492873398452267/1337792308757794907/qw-opengraph.png?ex=67ee9b2d&is=67ed49ad&hm=642986e7b228cf708dbb8a8dbe5374887d893bc9f122f626656043469ea3f8de&",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${LineSeed.className} relative h-screen w-screen overflow-hidden bg-zinc-900 antialiased`}
            >
                <div className="scrollbar-hide h-full w-full overflow-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
