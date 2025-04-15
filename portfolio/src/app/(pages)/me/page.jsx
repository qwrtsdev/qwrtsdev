import GetFullYear from "@/components/global/GetFullYear";
import { NumberTicker } from "@/components/magicui/number-ticker";
import getDayCount from "@/utils/BirthDate";

export const metadata = {
    title: "เกี่ยวกับฉัน",
};

export default function Home() {
    const birthDate = getDayCount();
    const girlfriend = 0;

    return (
        <main className="h-full items-center justify-center bg-zinc-50 text-zinc-900">
            <div className="4xl:px-0 flex w-full items-center justify-center px-4">
                <div className="w-full max-w-4xl border-l border-r border-zinc-300">
                    {/* Hero */}
                    <div className="justify-center py-12">
                        <div className="flex flex-col items-center justify-center gap-6 text-left text-zinc-900">
                            <span>
                                <p className="">Lorem ipsum dolor sit amet.</p>
                                <p className="">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </span>

                            <span>
                                <p>Nuttapong Nakawirot</p>
                                <p></p>
                            </span>
                        </div>
                    </div>

                    {/* About Me */}
                    <div className=""></div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 grid-rows-3 border-t border-zinc-300 lg:grid-cols-3 lg:grid-rows-1">
                        <div className="space-y-2 p-4 text-center font-bold">
                            <p>มีชีวิตมาแล้ว</p>
                            <p className="text-6xl">
                                <NumberTicker value={birthDate} />
                            </p>
                            <p>วัน</p>
                        </div>

                        <div className="space-y-2 border-x-0 border-y border-zinc-300 p-4 text-center font-bold lg:border-x lg:border-y-0">
                            <p>มีแฟนตอนนี้</p>
                            <p className="text-6xl">
                                <NumberTicker value={girlfriend} />
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
                                <NumberTicker value={1096} />
                            </p>
                            <p>ครั้ง</p>
                        </div>
                    </div>

                    {/* Showcases */}
                    <div className=""></div>

                    {/* Tastes */}
                    <div className=""></div>

                    {/* Tie-In */}
                    <div className="items-center justify-center border-t border-zinc-300 py-12 text-center">
                        <p className="text-3xl font-bold">อยากได้เว็บแบบนี้</p>
                        <p className="text-7xl font-black">บ้างเหรอ?</p>
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
