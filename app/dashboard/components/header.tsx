import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { dashboardNavConfig } from "@/config/dashboard";
import { siteConfig } from "@/config/site-map";
import { CommandIcon } from "lucide-react";
import Link from "next/link";
import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardHeader = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <header className="border p-6 flex items-center">
      <div className="flex gap-2 items-center mr-10">
        <CommandIcon />
        <Link href="/" className="font-semibold">
          {siteConfig.name}
        </Link>
      </div>

      <nav className="space-x-4 ">
        {dashboardNavConfig.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className={
              item.disabled ? "cursor-not-allowed text-gray-400" : "font-medium"
            }
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="ml-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage src={user?.picture!} />
              <AvatarFallback>{user?.given_name}</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="p-4 space-y-4 mr-8">
            <h1>{user?.given_name}</h1>
            <h2 className="text-gray-400"> {user?.email}</h2>
            <hr />

            <nav className="flex flex-col justify-center gap-2 p-4 ">
              {dashboardNavConfig.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={
                    item.disabled
                      ? "cursor-not-allowed text-gray-400"
                      : "font-medium"
                  }
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <hr />
            <Button variant={"secondary"} className="w-full">
              {" "}
              <LogoutLink> Logout</LogoutLink>{" "}
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default DashboardHeader;
