"use client";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoaderCircle, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PostCreateButton = ({
  variant = "default",
}: {
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
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function onClick() {
    setIsLoading(true);

    const response = await fetch("api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Post",
        authorEmail: user?.email,
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      <h1>something went wrong....</h1>;
    }
    const post = await response.json();
    // This forces a cache invalidation.

    router.refresh();

    router.push(`editor/${post.id}`);
    // console.log("rost", post);
  }

  return (
    <Button
      onClick={onClick}
      size={"sm"}
      className={"mr-2"}
      disabled={isLoading}
      variant={variant}
    >
      {" "}
      {isLoading ? (
        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <PlusIcon className="mr-1 h-4 w-4" />
      )}
      New post{" "}
    </Button>
  );
};

export default PostCreateButton;
