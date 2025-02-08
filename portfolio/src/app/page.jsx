import Aurora from "@/components/Aurora";
import Image from "next/image";
import Link from "next/link";
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <main className="h-[100dvh]">
      <Aurora />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col">
          <div className="relative w-full h-8 mb-6">
            <Image 
              src={'/qw-cropped-white.png'}
              alt={'qwrtsdev_logo'}
              sizes='100vw'
              layout='fill'
              objectFit='contain'
              priority={true}
              className=''
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="text-center font-thin text-zinc-100">
              <p>ขอบคุณที่เข้ามาดูในเว็บไซต์นะ</p>
              <p>แต่ยังไม่มีอะไรให้ดูตอนนี้หรอก รอไปก่อน</p>
            </div>
            <Link
            href='https://github.com/qwrtsdev'
            >
              <Github color="#f4f4f5" className="inline text-center" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
