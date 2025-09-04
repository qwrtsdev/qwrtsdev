import { Client } from "@notionhq/client";
import "server-only";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const fetchPages = React.cache(() => {
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: "Status",
            select: {
                equals: "Live",
            },
        },
    });
});

export const fetchBySlug = React.cache((slug) => {
    return notion.databases
        .query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        })
        .then((res) => res.results[0]);
});

export const fetchPageBlocks = React.cache((pageId) => {
    return notion.blocks.children
        .list({
            block_id: pageId,
        })
        .then((res) => res.results);
});
