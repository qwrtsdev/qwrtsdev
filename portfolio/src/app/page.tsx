import WorkCard from "@/components/global/WorkCard";
import SpotifySection from "@/components/global/SpotifySection";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { getDayCount, getFullYear } from "@/utils/dates";
import Badge from "@/components/global/Badge";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";
import Footer from "@/components/global/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { works } from "@/data/data.json";

export default async function Home() {
    const dayCount = getDayCount();
    const girlfriend = 0;
    const yearOld = getFullYear() - 2004;
    const threeWorks = works.slice(0, 3);

    return (
        <main className="h-full items-center justify-center bg-zinc-50 text-zinc-900">
            <div className="4xl:px-0 flex w-full items-center justify-center px-4">
                <div className="w-full max-w-4xl border-l border-r border-zinc-300">
                    {/* Hero */}
                    <div className="flex h-screen items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-6 px-4 text-center text-zinc-900 md:px-0">
                            <Image
                                src="/qw-cropped-up.png"
                                alt="Profile Image"
                                width={40}
                                height={40}
                            />

                            <div className="">
                                <TextAnimate
                                    animation="blurInUp"
                                    by="character"
                                    as="h1"
                                    className="text-wrap text-5xl font-black md:text-8xl"
                                    once
                                    segmentClassName=""
                                    variants={null}
                                >
                                    NUTTAPONG
                                </TextAnimate>

                                <TextAnimate
                                    animation="blurInUp"
                                    by="character"
                                    as="h1"
                                    className="text-wrap text-5xl font-black md:text-8xl"
                                    once
                                    segmentClassName=""
                                    variants={null}
                                >
                                    NAKAWIROT
                                </TextAnimate>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <Badge text="Developer" />
                                <Badge text="Video Editor" />
                                <Badge text="Music Geek" />
                            </div>
                        </div>
                    </div>

                    {/* About Me */}
                    <div className="flex flex-col items-center gap-8 border-t border-zinc-300 p-8 md:flex-row">
                        <div className="flex flex-col gap-2">
                            <ScratchToReveal
                                minScratchPercentage={70}
                                className="flex items-center justify-center overflow-hidden rounded-2xl border-2"
                                gradientColors={[
                                    "#18181b",
                                    "#18181b",
                                    "#18181b",
                                ]}
                                width={250}
                                height={250}
                                onComplete={null}
                            >
                                <AspectRatio ratio={1 / 1} className="w-full">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Profile Image"
                                        width={500}
                                        height={500}
                                        className="rounded-2xl"
                                    />
                                </AspectRatio>
                            </ScratchToReveal>

                            <p className="text-center text-xs font-thin text-zinc-900">
                                ขูดเพื่อดูรูปเต็ม
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-extrabold">About Me</h2>

                            <div className="flex flex-col gap-3 text-wrap">
                                <p>
                                    สวัสดีครับ ผมชื่อ <b>เกม</b> ตอนนี้อายุ{" "}
                                    <b>{yearOld} ปี</b> มีความฝันอยากเป็น{" "}
                                    <b>โปรแกรมเมอร์</b> และมี <b>สตาร์ทอัพ</b>{" "}
                                    เป็นของตัวเองในอนาคตครับ
                                </p>

                                <p>
                                    ผมรู้สึกสนใจเทคโนโลยีมาตั้งแต่เด็ก
                                    แต่เดิมแล้วผมทำงานด้าน <b>กราฟิกดีไซน์</b>{" "}
                                    เป็นหลัก
                                    ก่อนจะตัดสินใจเปลี่ยนสายมาเป็นโปรแกรมเมอร์อย่างจริงจังเมื่อประมาณเกือบสองปีที่ผ่านมา
                                    ตอนนี้จึงถือว่ายังคงเป็น{" "}
                                    <b>จูเนียร์หน้าใหม่</b>{" "}
                                    สำหรับวงการนี้อยู่ครับ
                                </p>

                                <p>
                                    ผมชอบความอิสระในการทำงาน
                                    และหลงใหลในแนวคิดการเติบโตของเทคโนโลยีที่ยังคงเดินหน้าต่อไปอีกเรื่อยๆ
                                    เพราะผมเชื่อว่า{" "}
                                    <b>
                                        อะไรก็เป็นไปได้
                                        หากมนุษย์มีความพยายามมากพอ
                                    </b>{" "}
                                    และด้วยพื้นฐานด้านกราฟิกที่มี
                                    ผมจึงสามารถนำความครีเอทีฟมาต่อยอดในงานเขียนโค้ดเพื่อสร้างผลงานที่มีจุดเด่นและความน่าสนใจได้
                                    ทำให้ปัจจุบันผมทำงานสาย <b>front-end</b>{" "}
                                    เป็นหลัก แต่ยังคงเปิดรับความรู้ใหม่ๆ
                                    ในด้านอื่นอยู่เสมอครับ
                                </p>
                            </div>

                            <span className="text-sm">
                                <p>
                                    <Image
                                        alt="อยากจะร้องไห้"
                                        width="18"
                                        height="18"
                                        src="/emojis/round_pushpin.png"
                                        className="inline-block items-center"
                                    />{" "}
                                    Bangkok, Thailand.
                                </p>
                            </span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 grid-rows-3 border-t border-zinc-300 lg:grid-cols-3 lg:grid-rows-1">
                        <div className="space-y-2 p-4 text-center font-bold">
                            <p>มีชีวิตมาแล้ว</p>
                            <p className="text-6xl">
                                <NumberTicker
                                    value={dayCount}
                                    className="text-zinc-900"
                                />
                            </p>
                            <p>วัน</p>
                        </div>

                        <div className="space-y-2 border-x-0 border-y border-zinc-300 p-4 text-center font-bold lg:border-x lg:border-y-0">
                            <p>มีแฟนตอนนี้</p>
                            <p className="text-6xl">
                                <NumberTicker
                                    value={girlfriend}
                                    className="text-zinc-900"
                                />
                            </p>
                            <p>
                                คน
                                <Image
                                    alt="อยากจะร้องไห้"
                                    width="18"
                                    height="18"
                                    src="/emojis/cry.png"
                                    className="ml-1 inline-block items-center"
                                />
                            </p>
                        </div>

                        <div className="space-y-2 p-4 text-center font-bold">
                            <p>พยายามไม่คิดถึงเธอ</p>
                            <p className="text-6xl">
                                <NumberTicker
                                    value={1096}
                                    className="text-zinc-900"
                                />
                            </p>
                            <p>ครั้ง</p>
                        </div>
                    </div>

                    {/* kmutnb */}
                    <div
                        className="back relative w-full overflow-hidden bg-cover bg-fixed bg-center py-12 text-center"
                        style={{
                            backgroundImage: "url('/images/kmutnb-uni.jpg')",
                        }}
                    >
                        <div className="absolute inset-0 bg-orange-500 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                        <div className="relative z-10">
                            <p className="pb-3 text-2xl text-zinc-100">
                                สถานะตอนนี้ :
                            </p>
                            <p className="text-5xl font-bold text-zinc-50">
                                ติดมหาลัย มจพ. แล้วครับ!
                            </p>
                        </div>
                    </div>

                    {/* Work Showcases */}
                    <div>
                        <p className="py-4 text-center text-lg font-bold text-zinc-900">
                            ผลงานต่างๆ
                        </p>

                        <div className="grid grid-cols-1 grid-rows-1 gap-4 px-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
                            {threeWorks.map((work, index) => (
                                <div key={index} className="">
                                    <WorkCard
                                        title={work.title}
                                        thumbnail={work.thumbnail}
                                        link={work.link}
                                        featured={work.featured}
                                        roles={work.roles}
                                    />
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/works"
                            className="group text-center text-sm text-zinc-900 hover:underline"
                        >
                            <p className="py-4">
                                ดูผลงานทั้งหมด{" "}
                                <ArrowRight
                                    className="inline ease-in-out group-hover:translate-x-1 group-hover:transition-transform"
                                    size={14}
                                />
                            </p>
                        </Link>
                    </div>

                    {/* Music Tastes */}
                    <SpotifySection />

                    {/* Connection */}
                    <div className="border-t border-zinc-300">
                        <Marquee repeat={3} className="font-bold text-zinc-300">
                            <span>let&apos;s connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let&apos;s connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let&apos;s connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let&apos;s connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                        </Marquee>

                        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
                            <a
                                href="https://discordapp.com/users/824442267318222879/"
                                title="Discord"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/discord-icon.svg"
                                    alt="Discord's Icon"
                                    width="46"
                                    height="46"
                                    className="transition-transform duration-200 hover:scale-110"
                                />
                            </a>

                            <a
                                href="https://www.facebook.com/dumbqwrts"
                                title="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/facebook-icon.svg"
                                    alt="Facebook's Icon"
                                    width="46"
                                    height="46"
                                    className="transition-transform duration-200 hover:scale-110"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/sillyqwrts"
                                title="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/instagram-icon.svg"
                                    alt="Instragram's Icon"
                                    width="46"
                                    height="46"
                                    className="transition-transform duration-200 hover:scale-110"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/qwrtsdev/"
                                title="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/linkedin-icon.svg"
                                    alt="LinkedIn's Icon"
                                    width="46"
                                    height="46"
                                    className="transition-transform duration-200 hover:scale-110"
                                />
                            </a>
                        </div>

                        <Marquee
                            repeat={3}
                            reverse={true}
                            className="font-bold text-zinc-300"
                        >
                            <span>let&apos;s connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let&apos;s connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let&apos;s connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let&apos;s connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                        </Marquee>
                    </div>

                    {/* Tie-In */}
                    <div className="flex flex-col items-center justify-center gap-8 border-t border-zinc-300 py-12 text-center">
                        <div className="">
                            <p className="text-3xl font-bold">
                                อยากได้เว็บแบบนี้
                            </p>
                            <p className="text-7xl font-black">บ้างเหรอ?</p>
                        </div>

                        <div className="">
                            <a
                                href="https://fastwork.co/user/qwrtsdev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/fastwork-logo.svg"
                                    alt="Fastwork's Icon"
                                    width="180"
                                    height="180"
                                    className="transition-transform duration-200 hover:scale-105"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
