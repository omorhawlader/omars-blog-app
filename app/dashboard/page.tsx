"use client";
import { Button } from "@/components/ui/button";
import { asidebarItemsConfig } from "@/config/dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FileText, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Page = () => {
  // const { getUser } = await getKindeServerSession();
  // const user = await getUser();
  const params = useParams();
  const pathName = usePathname();
  console.log(params);

  return (
    <main className="py-8 w-full min-h-[85vh] flex flex-col justify-center gap-4">
      <div className="flex items-center justify-between px-14">
        <div>
          <h1 className="text-4xl font-bold">Posts</h1>
          <p className="text-gray-400 mt-2">Create and manage posts.</p>
        </div>
        <Button size={"sm"} className="mr-2">
          {" "}
          <PlusIcon /> New post{" "}
        </Button>
      </div>
      <div className="border rounded self-center w-11/12 h-5/6">
        <div className="flex flex-col justify-center items-center h-full gap-4">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex justify-center items-center">
            <FileText className="h-[6vh] w-[6vw]" />
          </div>
          <p className="font-bold">No Posts Created.</p>
          <p className="text-gray-400">
            You don&#39;t have any posts yet. Start creating content.
          </p>
          <Button variant={"outline"}>
            <PlusIcon className="text-gray-400 mr-1 w-[18px] h[18px] " />
            New Post
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
