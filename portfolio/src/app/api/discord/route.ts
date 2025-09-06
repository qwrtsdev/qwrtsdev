import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
    const res = await fetch(
        `https://api.lanyard.rest/v1/users/${process.env.NEXT_PUBLIC_DISCORD_ID}`,
    );

    if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));

        return new NextResponse(
            JSON.stringify({
                error: "ไม่สามารถโหลดข้อมูลได้",
                details: errorBody,
            }),
            {
                status: res.status,
                headers: { "Content-Type": "application/json" },
            },
        );
    }

    const resjson = await res.json();

    return new NextResponse(JSON.stringify({ resjson }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
