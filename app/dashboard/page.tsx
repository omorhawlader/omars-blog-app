"use client";
import { Button } from "@/components/ui/button";
import {
  EllipsisVertical,
  FileText,
  LoaderCircle,
  PlusIcon,
} from "lucide-react";
import connectDb from "@/lib/db";
import Blog from "@/models/blog-schema";
import Btn from "./components/btn";
import { MouseEventHandler, useEffect, useState } from "react";
import { deletePostById, getAllPost } from "@/lib/fetchPost";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

interface Post extends Document {
  _id: string;
  title: string;
  content?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorEmail: string;
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [open, setopen] = useState<boolean | undefined>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getPosts() {
    const posts = await getAllPost();
    if (!posts) return;
    // console.log(posts);
    setPosts(posts);
  }

  const router = useRouter();
  useEffect(() => {
    getPosts();
  }, []);

  async function detetePost(id: string) {
    setIsLoading(true);
    try {
      await deletePostById(id);
    } catch (error) {
      throw new Error("failed to Delete the Post");
    }
    setIsLoading(false);
    setopen(false);
    getPosts();
    router.refresh();
  }
  return (
    <div className="py-8 w-full min-h-[85vh] flex flex-col justify-start gap-4">
      <div className="flex items-center justify-between px-14">
        <div>
          <h1 className="text-4xl font-bold">Posts</h1>
          <p className="text-gray-400 mt-2">Create and manage posts.</p>
        </div>
        <Btn />
      </div>
      {posts ? (
        posts.map((post: Post) => (
          <div
            key={post._id}
            className="p-4 flex justify-between self-center border rounded w-11/12 items-center"
          >
            <div>
              <Link className="hover:underline " href={`editor/${post._id}`}>
                {post.title}
              </Link>
              <p className="text-gray-400 mt-2">
                {post.updatedAt.toLocaleDateString()}
              </p>
            </div>

            <AlertDialog open={open} onOpenChange={() => setopen(!open)}>
              <AlertDialogTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <EllipsisVertical className="text-gray-500 w-4 h-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your Post <span className="text-red-500">{post.title}</span>{" "}
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button
                      onClick={() => {
                        detetePost(post._id);
                      }}
                      variant={"destructive"}
                    >
                      {isLoading && (
                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Delete
                    </Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))
      ) : (
        <div className="border rounded self-center w-11/12 h-5/6">
          <div className="flex flex-col justify-center items-center h-full gap-4">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex justify-center items-center">
              <FileText className="h-[6vh] w-[6vw]" />
            </div>
            <p className="font-bold">No Posts Created.</p>
            <p className="text-gray-400">
              You don&#39;t have any posts yet. Start creating content.
            </p>

            <Btn variant={"outline"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
