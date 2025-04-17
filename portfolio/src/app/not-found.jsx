import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/global/Footer";

export default function NotFound() {
    return (
        <div className="h-screen">
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <p className="text-4xl font-bold text-zinc-900">404</p>

                <p className="text-2xl text-zinc-900">
                    ไม่พบหน้าที่คุณต้องการค้นหา
                </p>

                <Link
                    href="/"
                    className="group items-center justify-center text-sm hover:underline"
                >
                    <ArrowLeft
                        className="inline ease-in-out group-hover:-translate-x-1 group-hover:transition-transform"
                        size={14}
                    />{" "}
                    กลับไปที่หน้าแรก
                </Link>
            </div>

            <Footer />
        </div>
    );
}
