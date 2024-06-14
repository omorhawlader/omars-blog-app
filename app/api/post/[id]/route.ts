import connectDb from "@/lib/db";
import Blog from "@/models/blog-schema";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest, { params }:{params:{id:string}}) {
    const { id } = params;
    const { newTitle: title, newContent: content } = await request.json();
    await connectDb();
    await Blog.findByIdAndUpdate(id, { title, content });
    return NextResponse.json({ message: "post updated" }, { status: 200 });
  }

export async function GET(request:NextRequest,{params}:{params:{id:string} }) {
    try {
    const {id} = params;
    console.log(id)
    await connectDb();
    const blog = await Blog.findOne({_id: id})
    return NextResponse.json({blog},{status:200});
    } catch (error) {
        return NextResponse.json({message:"server Problem"},{status:500})
    }

}