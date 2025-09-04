import { fetchPages } from "@/lib/notion";

export default async function Page() {
    const post = await fetchPages();

    return (
        <></>
    )
}