import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "./components/card";
import { cardConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site-map";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <>
      <section className=" w-[78vw] h-[70vh] flex items-center justify-center m-auto text-center">
        <div className="space-y-6">
          <Button variant={"secondary"} className="rounded-xl">
            Follow along on Facebook
          </Button>
          <h1 className="antialiased hover:subpixel-antialiased text-[4.2vw] leading-tight font-extrabold">
            An Example App Built Using <br />
            Next.js 14 With Server Components.
          </h1>

          <h2 className="antialiased hover:subpixel-antialiased text-gray-400 text-[2.2vw] font-medium">
            I&#39;m building a web app with Next.js 14 and open sourcing
            everything. <br /> Follow along as we figure this out together.
          </h2>
          <div className="space-x-6">
            <Button className="py-6 px-8">
              <LoginLink>Get Started Free</LoginLink>
            </Button>
            <Button variant={"secondary"} className="py-6 px-8">
              <Link href={siteConfig.links.github}>Github</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="w-screen flex flex-col text-center justify-center items-center gap-8 overflow-hidden h-screen bg-[#F8FAFC] dark:bg-inherit">
        <div>
          <h1 className="text-[4.2vw] font-bold">Features</h1>
          <h3 className="text-[1.3vw] text-gray-400 font-medium max-w-5xl">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, <br /> API routes, and static pages would
            work in Next.js 14 app dir and more...
          </h3>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {cardConfig.map((item, index) => (
            <Card
              key={index}
              logo={item.logo}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <p className="text-[1.3vw]  text-gray-400 font-medium max-w-5xl">
          Omar&#39;s blog also want to includes a blog and a full-featured
          documentation site with contributors
        </p>
      </section>
    </>
  );
}
