"use client";

import { useRouter } from "next/navigation";

const RedirectCom = ({ path }: { path: string }) => {
  const router = useRouter();
  router.push(path);
  return undefined;
};

export default RedirectCom;
