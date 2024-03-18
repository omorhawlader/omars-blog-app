"use client";
import { Button } from "@/components/ui/button";
import { asidebarItemsConfig } from "@/config/dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sitebar = () => {
  const pathName = usePathname();
  return (
    <aside className="p-8 w-[250px]">
      <nav className="flex flex-col gap-8">
        {asidebarItemsConfig.map((item, index) => (
          <Button
            key={index}
            disabled={item.disabled ? true : false}
            className="flex justify-start"
            variant={pathName == item.href ? "secondary" : "ghost"}
          >
            <Link
              className={
                item.disabled
                  ? "cursor-not-allowed text-gray-400 flex gap-2 "
                  : "flex gap-2"
              }
              href={item.disabled ? "#" : item.href}
            >
              {item.icon}
              {item.title}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
};

export default Sitebar;
