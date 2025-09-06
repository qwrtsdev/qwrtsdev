import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";
import Footer from "@/components/global/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { TitlePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function Page({ params }: { params: { slug: string } }) {
    const search = await params
    const searchTerms = search.slug
    const post = await fetchBySlug(searchTerms);

    if (!post) {
        return notFound();
    }

    const blocks = await fetchPageBlocks(post.id);

    const renderer = new NotionRenderer({ client: notion });
    renderer.use(hljsPlugin({}));
    renderer.use(bookmarkPlugin(undefined));

    const html = await renderer.render(...blocks);

    return (
        <div className="h-full items-center justify-center bg-zinc-50 text-zinc-900">
            <div className="4xl:px-0 flex w-full items-center justify-center px-4">
                <div className="w-full max-w-4xl border-l border-r border-zinc-300 p-6">
                    <Link
                        href="/blogs"
                        className="group max-w-max items-center justify-center text-sm hover:underline"
                    >
                        <ArrowLeft
                            className="inline ease-in-out group-hover:-translate-x-1 group-hover:transition-transform"
                            size={14}
                        />{" "}
                        กลับไปที่หน้าแรก
                    </Link>
                    <div className="text-4xl">{post.properties.Name.title[0].plain_text || "Untitled"}</div>
                    <div className="prose prose-xl notion whitespace-pre-line" dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
