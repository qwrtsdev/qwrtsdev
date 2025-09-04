import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function Page({ params }) {
    const post = await fetchBySlug(params.slug);

    if (!post) {
        return <>Page not Found</>;
    }

    const blocks = await fetchPageBlocks(post.id);
    const renderer = new NotionRenderer({ client: notion });

    renderer.use(hljsPlugin({}));
    renderer.use(bookmarkPlugin(undefined));

    const html = await renderer.render(...blocks);

    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
