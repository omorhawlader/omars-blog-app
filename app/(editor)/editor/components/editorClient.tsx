"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

export default function App() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <Button variant={"ghost"} className="pr-8 py-6">
            <ChevronLeft className="w-[18px] h-[18px] mr-1" /> back
          </Button>
          <p className="text-gray-400">Draft</p>
        </div>
        <Button>
          {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
          Save
        </Button>
      </div>
      <div className="max-w-4xl m-auto">
        <textarea
          name="textarea"
          className="pl-14 w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl text-zinc-600 font-bold focus:outline-none"
        >
          New Note
        </textarea>
        <Editor />
      </div>
    </>
  );
}
