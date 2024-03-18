"use client";

import { Button } from "@/components/ui/button";
import { MainNavItem } from "@/types";
import { CommandIcon, X } from "lucide-react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useState } from "react";

type mainNavProps = { items: MainNavItem[] };

const Header = ({ items }: mainNavProps) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <header className="max-w-screen-xl m-auto flex items-center p-6 gap-4 w-full ">
      {/* @description --> bran-Logo */}
      <div className="hidden md:flex items-center gap-2">
        <Link href={"/"} className="border">
          <CommandIcon />
        </Link>
        <Link href={"/"} className="hidden dark:block text-white">
          <CommandIcon />
        </Link>
        <span className="font-semibold">Omars Blog</span>
      </div>
      <Popover onOpenChange={() => setOpen((prev) => !prev)}>
        <PopoverTrigger asChild className="md:hidden">
          <Button variant={"link"}>
            {open ? <X /> : <CommandIcon />}
            <p className="font-semibold ml-2 text-lg">Menu</p>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[98vw] ml-[1vw] mr-[1vw] md:hidden">
          {/* ---- */}
          <div className="flex md:hidden items-center gap-2">
            <Link href={"/"} className="border">
              <CommandIcon />
            </Link>
            <Link href={"/"} className="hidden dark:block text-white">
              <CommandIcon />
            </Link>
            <span className="font-semibold">Omars Blog</span>
          </div>

          {/* ------- */}

          {
            <nav className=" md:hidden">
              {items.map((item, index) => (
                <div key={index} className="my-4">
                  <Link
                    href={item.disabled ? "#" : item.href}
                    className={
                      item.disabled
                        ? "cursor-not-allowed text-muted-foreground/60"
                        : "text-muted-foreground hover:underline"
                    }
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
              {/* login Button  */}
            </nav>
          }
        </PopoverContent>
      </Popover>

      {/* --------------------- end ------   */}

      {/* navbar with items  */}
      {items.length && (
        <nav className="ml-8 hidden md:flex gap-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={
                item.disabled
                  ? "cursor-not-allowed text-muted-foreground/60"
                  : "text-muted-foreground"
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
      {/* login Button  */}
      <Button variant={"secondary"} className="ml-auto px-5" asChild>
        {/* <Link href={"/login"}>login</Link> */}
        <LoginLink>login</LoginLink>
      </Button>
    </header>
  );
};

export default Header;
