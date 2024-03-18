"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

const Test = () => {
  const { user } = useKindeBrowserClient();
  return (
    <div>
      {user?.picture}
      <Image src={user?.picture!} alt="d" width={100} height={100} />
      <h1>okay</h1>
    </div>
  );
};

export default Test;
