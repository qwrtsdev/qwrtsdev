import GetFullYear from "@/components/global/GetFullYear";
import Card from "@/components/global/Card";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";
import getDayCount from "@/utils/BirthDate";
import Badge from "@/components/global/Badge";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function Home() {
    const birthDate = getDayCount();
    const girlfriend = 0;

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
                                width={50}
                                height={50}
                            />

                            <h1 className="text-6xl font-black md:text-8xl">
                                Nuttapong Nakawirot
                            </h1>

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
                                minScratchPercentage={80}
                                className="flex items-center justify-center overflow-hidden rounded-2xl border-2"
                                gradientColors={[
                                    "#18181b",
                                    "#18181b",
                                    "#18181b",
                                ]}
                                width={250}
                                height={250}
                            >
                                <AspectRatio ratio={1 / 1} className="w-full">
                                    <Image
                                        src="/profile.jpg"
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
                                    สวัสดีครับ, ผมชื่อ <b>เกม</b> ปีนี้อายุ{" "}
                                    <b>21 ปี</b> ครับ มีความฝันอยากเป็น
                                    <b>โปรแกรมเมอร์</b> และเปิดสตาร์ทอัพ
                                    เป็นของตัวเอง
                                </p>

                                <p>
                                    ตัวผมคลุกคลีอยู่กับเรื่องเทคมานานตั้งแต่ยังเด็กๆ
                                    แต่เมื่อก่อนผมทำงานด้าน<b>กราฟิก</b>
                                    เป็นหลัก
                                    ทำให้ตัวผมพึ่งจะได้ย้ายสายงานมาสู่โปรแกรมเมอร์จริงๆแค่เกือบสองปีเท่านั้น
                                    จึงถูกนับว่าเป็น<b>จูเนียร์ไฟแรง</b>
                                    สำหรับสายงานด้านนี้
                                </p>

                                <p>
                                    ผมชอบความอิสระในการทำงาน
                                    และแนวคิดการเติบโตของเทคโนโลยีในปัจจุบัน
                                    เพราะผมเชื่อว่า
                                    <b>
                                        มนุษย์นั้นมีศักยภาพที่สามารถสร้างทุกอย่างให้เกิดขึ้นจริงได้เสมอหากเราพยายามมากพอ
                                    </b>
                                    <br />
                                    ซึ่งด้วยความที่ผมนั้นมีประสบการณ์ทำงานในด้านกราฟิกมาก่อน
                                    ผมจึงสามารถนำความรู้และความครีเอทีฟของผม
                                    นำมาสร้างเป็นผลงานที่มี<b>เอกลักษณ์</b>
                                    และดึงดูดผู้คนได้
                                    จึงทำให้ในปัจจุบันนี้ผมจะทำงานสาย{" "}
                                    <b>front-end</b> เป็นหลัก
                                    แต่ยังคงค้นหาศึกษาความรู้ในด้านอื่นอยู่เสมอ
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 grid-rows-3 border-t border-zinc-300 lg:grid-cols-3 lg:grid-rows-1">
                        <div className="space-y-2 p-4 text-center font-bold">
                            <p>มีชีวิตมาแล้ว</p>
                            <p className="text-6xl">
                                <NumberTicker
                                    value={birthDate}
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
                                <img
                                    alt="อยากจะร้องไห้"
                                    width="18"
                                    height="18"
                                    src="/cry.png"
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
                        style={{ backgroundImage: "url('/kmutnb-uni.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-orange-500 mix-blend-multiply"></div>

                        {/* Optional: add a darkening overlay if needed */}
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

                    {/* Showcases */}
                    <div className="border-t border-zinc-300">
                        <p className="py-4 text-center font-bold text-zinc-900">
                            ประสบการณ์ที่ผ่านมา
                        </p>

                        <div className="grid grid-cols-1 grid-rows-3 gap-4 px-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
                            <Card
                                thumbnail="/sunnyhellgate-project.jpg"
                                title="หนุ่มทรงSAD แห่งดินแดนDiscord #เดี่ยวซันสั้น"
                                link="https://youtu.be/wByxPzKhJt8"
                                featured={true}
                                tags={["Video Editor"]}
                            />

                            <Card
                                thumbnail="/toyotapithan.jpg"
                                title="Toyota Pithan Hatyai"
                                link="https://g.co/kgs/du2FsNL"
                                tags={["IT / Programmer (Intern)"]}
                            />

                            <Card
                                thumbnail="/ywc20.jpg"
                                title="Young Webmaster Camp 20"
                                tags={["(Potentially) Paticipant"]}
                            />
                        </div>

                        <p className="py-4 text-center text-sm text-zinc-900">
                            และอื่นๆอีกมากมาย...
                        </p>
                    </div>

                    {/* Connection */}
                    <div className="border-t border-zinc-300">
                        <Marquee repeat={3} className="font-bold text-zinc-300">
                            <span>let's connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let's connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let's connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let's connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                        </Marquee>

                        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
                            <a
                                href="https://discordapp.com/users/824442267318222879/"
                                title="Discord"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/discord-icon.svg"
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
                                <img
                                    src="/facebook-icon.svg"
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
                                <img
                                    src="/instagram-icon.svg"
                                    alt="Instragram's Icon"
                                    width="46"
                                    height="46"
                                    className="transition-transform duration-200 hover:scale-110"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/sillyqwrts"
                                title="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/linkedin-icon.svg"
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
                            <span>let's connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let's connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let's connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                            <span>let's connect </span>
                            <span>มาเชื่อมต่อกันเถอะ </span>
                        </Marquee>
                    </div>

                    {/* Tastes */}
                    <div className="justify-center"></div>

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
                                <img
                                    src="/fastwork-logo.svg"
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

            <footer className="border-t border-zinc-300">
                <div className="flex items-center justify-center py-5 text-center text-xs text-zinc-600">
                    © <GetFullYear /> qwrtsdev. All rights reserved.
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
        </main>
    );
}
