"use server"
import Blog from "@/models/blog-schema";
import connectDb from "./db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";




export async function fetchPost(id:string) {
  
  await connectDb();
  const blog = await Blog.findOne({_id: id})
  return blog;
  }
export async function getAllPost() {
  getKindeServerSession
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  await connectDb();
  const blogs = await Blog.find({authorEmail:user?.email}).lean();
  return blogs;
}

export async function AllPosts() {
  await connectDb();
  const blogs = await Blog.find().lean();
  return blogs
}

export async function getPostByIdAndUpdate(id:string,block:string,title:string,html:string){
  await connectDb();
  const blog = await Blog.findByIdAndUpdate({_id:id},{
    title,
    content:block,
    html
  })
  return blog;
}
export async function deletePostById(id:string) {
  await connectDb();
  const blog = await Blog.deleteOne({_id:id})
  return blog;
}