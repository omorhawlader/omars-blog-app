"use client";
import { AllPosts } from "@/lib/fetchPost";
import { useEffect, useRef } from "react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
// import "@blocknote/react/style.css";

import "./style.css";

const Posts = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function getPostsWithHTml() {
      try {
        const posts = await AllPosts();
        if (!posts) return;

        // Accumulate HTML content from all posts
        let htmlContent = "";
        posts.forEach((post) => {
          htmlContent += `<div omar class="container">${
            post.html ?? "no posts"
          }</div>`;
        });

        // Set the accumulated HTML content to the div's innerHTML
        if (ref.current) {
          ref.current.innerHTML = htmlContent;
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPostsWithHTml();
  }, []);

  return <div ref={ref}></div>;
};

export default Posts;
