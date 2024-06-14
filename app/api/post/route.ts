import connectDb from "@/lib/db";
import Blog from "@/models/blog-schema";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(request:NextRequest){
//     try {
        
//     } catch (error) {
        
//     }
// }

export async function POST(request:NextRequest) {
    try {
        const {title,authorEmail} = await request.json();
    await connectDb();
    if(!title && !authorEmail) return NextResponse.json({success:false,error:"unothorize! or something bad request"},{status:401})
    const blog = new Blog({
        title,
        authorEmail
    })

    await blog.save();
    return NextResponse.json({message:"New Post Created",success:true,id:blog._id},{status:201});
    } catch (error) {
      return  NextResponse.json({message:"server problem"},{status:500})
    }

}