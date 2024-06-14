"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import {
  ChangeEventHandler,
  EventHandler,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchPost } from "../../../../lib/fetchPost";
import SaveButton from "@/components/save-button";
import { useRouter } from "next/navigation";
// const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

interface Post {
  title?: string;
  content?: string;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  authorEmail?: string;
}

export default function App({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post>({});
  const router = useRouter();
  const [title, setTitle] = useState<string | undefined>("");
  const [blocks, setBlocks] = useState<string>();
  const [html, setHtml] = useState<string>();
  const { id } = params;
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    [post.content]
  );
  useEffect(() => {
    const fetchAndSetPost = async () => {
      try {
        const fetchedPost = await fetchPost(id);
        setPost((prevPost) => {
          return { ...prevPost, ...fetchedPost };
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAndSetPost();
  }, [id]);
  useEffect(() => {
    setTitle(post.title);
    setBlocks(post?.content);
    // console.log(post);
  }, [post]);
  // router.refresh();
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <SaveButton
            placeholder="back"
            className="pr-8 py-6"
            variant={"ghost"}
            id={id}
            block={blocks!}
            html={html!}
            title={title!}
            isBack={true}
          />
          <p className="text-gray-400">Draft</p>
        </div>
        <SaveButton
          html={html!}
          placeholder="save"
          id={id}
          block={blocks!}
          title={title!}
        />
      </div>
      <div className="max-w-4xl m-auto">
        <textarea
          name="textarea"
          className="pl-14 w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl text-zinc-600 font-bold focus:outline-none"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        ></textarea>
        <Editor setHtml={setHtml} block={blocks!} setBlock={setBlocks} />
      </div>
    </>
  );
}
