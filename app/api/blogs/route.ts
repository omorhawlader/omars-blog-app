import connectDb from "@/lib/db";
import Blog from "@/models/blog-schema";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request:NextRequest) {
    const {title,author} = await request.json();
    await connectDb();
    await Blog.create({title,author});
    return NextResponse.json({message:"New Post Created"},{status:201});

}