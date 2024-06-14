"use client";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, LoaderCircle } from "lucide-react";
import { getPostByIdAndUpdate } from "@/lib/fetchPost";

const SaveButton = ({
  id,
  block,
  title,
  placeholder,
  isBack = false,
  variant = "default",
  className,
  html,
}: {
  id: string;
  block: string;
  title: string;
  placeholder: string;
  isBack?: boolean;
  className?: string;
  html: string;
  variant?:
    | "secondary"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | null
    | undefined;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  async function onclick() {
    try {
      setIsLoading(true);
      await getPostByIdAndUpdate(id, block, title, html);
      setIsLoading(false);
      router.refresh();
      isBack && router.push("/dashboard");
    } catch (error) {
      throw new Error("Post Updated Failed!");
    }
  }
  return (
    <Button variant={variant} className={className} onClick={() => onclick()}>
      {isBack ? (
        isLoading ? (
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <ChevronLeft className="w-[18px] h-[18px] mr-1" />
        )
      ) : (
        isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
      )}
      {placeholder}
    </Button>
  );
};

export default SaveButton;
