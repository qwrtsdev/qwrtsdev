import Aurora from "@/components/Aurora";
import Image from "next/image";
import Link from "next/link";
import { MessageSquareMore, Github, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="h-[100dvh] flex justify-center items-center">
      <Aurora className="h-full"/>
      
      <div className="absolute z-10">
        <div className="flex flex-col p-8 rounded-lg border-zinc-500 border border-opacity-50 bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-2xl bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100">
          <div className="relative w-full h-8 mb-8">
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
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="text-center text-xs font-thin text-zinc-100">
              <p>you're here. thanks for visiting.</p>
              <p>but there's nothing for you. maybe later?</p>
            </div>
            <div className="text-center flex flex-row gap-3">
              <Link
              href='https://discord.gg/JKsYSd4TVf'
              target="_blank" 
              rel="noopener noreferrer"
              >
                <MessageSquareMore color="#f4f4f5" size={18} strokeWidth={1.25} className="inline" />
              </Link>
              <Link
              href='https://github.com/qwrtsdev'
              target="_blank" 
              rel="noopener noreferrer"
              >
                <Github color="#f4f4f5" size={18} strokeWidth={1.25} className="inline" />
              </Link>
              <Link
              href='https://linktr.ee/qwrts'
              target="_blank" 
              rel="noopener noreferrer"
              >
                <Globe color="#f4f4f5" size={18} strokeWidth={1.25} className="inline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
