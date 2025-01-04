import Shit from "@/app/Model/Shit.model";
import dbConnect from "@/app/utils/dbConnect";
import { NextRequest as Request, NextResponse as Response } from "next/server";

export async function POST(request: Request) {
    const { title, description, link } = await request.json();

    // console.log(title);
    if (!title || !description || !link) {
        return Response.json({ message: 'All details were not passed' }, { status: 400 });
    }
    try {
        await dbConnect();
        const shit = new Shit({
            title, description, link
        })
        await shit.save();
        console.log(shit);

    } catch (error) {
        // throw error;
        return Response.json({ message: error.message }, { status: 500 });
    }

    return Response.json({ message: `${title} was added` }, { status: 201 });
}

export async function GET() {
    try {
        dbConnect();
        const shits = await Shit.find({});
        return Response.json({ data: shits }, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    if (!id) return Response.json({ message: 'Id was not passed' }, { status: 400 });

    try {
        dbConnect();
        const shit = await Shit.deleteOne({ _id: id });
        console.log(shit);
        return Response.json({message:"Shit deleted successfully"},{status:203})
    } catch (error) {
        console.log(error);
        return Response.json({ message: "Internal Server Error" }, { status: 500 })

    }
}