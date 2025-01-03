import { NextRequest as Request, NextResponse as Response } from "next/server";

export async function POST(request: Request) {
    const { title, desciption, link } = await request.json();

    console.log(title);
    if (!title || !desciption || !link) {
        return Response.error();
    }
    return Response.json({ title, desciption, link });
}