import Card from "@/components/global/Card";
import Footer from "@/components/global/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Works() {
    const works = [
        {
            title: "หนุ่มทรงSAD แห่งดินแดนDiscord #เดี่ยวซันสั้น",
            thumbnail: "/images/sunnyhellgate-project.jpg",
            link: "https://youtu.be/wByxPzKhJt8",
            featured: true,
            tags: ["Video Editor"],
        },
        {
            title: "Toyota Pithan Hatyai",
            thumbnail: "/images/toyotapithan.jpg",
            link: "https://g.co/kgs/du2FsNL",
            tags: ["IT / Programmer (Intern)"],
        },
        {
            title: "Young Webmaster Camp 20",
            thumbnail: "/images/ywc20.jpg",
            tags: ["Paticipant"],
        },
        {
            title: "QwrtsArchive",
            thumbnail: "/images/qwrtsarchive.jpg",
            link: "https://www.youtube.com/@qwrtsarchive",
            tags: ["Old YouTube Channel"],
        },
        {
            title: "GameFiend",
            thumbnail: "/images/gamefiend.png",
            link: "https://www.facebook.com/gamefiendmedia",
            tags: ["Founder / Community Manager"],
        },
        {
            title: "Swipify React",
            thumbnail: "/images/swipify-react.webp",
            link: "https://github.com/qwrtsdev/swipify-react",
            tags: ["Contributor"],
        },
    ];

    return (
        <div className="h-full items-center justify-center">
            <div className="4xl:px-0 flex w-full items-center justify-center px-4">
                <div className="w-full max-w-4xl border-l border-r border-zinc-300">
                    <div className="flex flex-col gap-4 p-6">
                        <span>
                            <h2 className="text-2xl font-bold">WORKS</h2>
                            <p>ประวัติผลงานที่เคยผ่านมาทั้งหมด</p>
                        </span>

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

                    <div className="grid grid-cols-1 grid-rows-3 gap-4 border-t border-zinc-300 p-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
                        {works.map((work, index) => (
                            <div key={index} className="">
                                <Card
                                    thumbnail={work?.thumbnail || null}
                                    title={work?.title || null}
                                    link={work?.link || null}
                                    featured={work?.featured || false}
                                    tags={work?.tags || []}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
