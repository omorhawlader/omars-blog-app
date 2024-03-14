import { siteConfig } from "@/config/site-map";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-screen h-[40vh] flex flex-col justify-around ">
      <div className="text-center">
        <h1 className="text-[4.5vw] font-bold">Proudly Open Source</h1>
        <h4 className="text-[1.2vw] text-gray-400">
          Taxonomy is open source and powered by open source software. ,<br />
          The code is available on{" "}
          <Link
            href={siteConfig.links.github}
            className="underline text-gray-700 font-semibold"
          >
            GitHub.
          </Link>
        </h4>
      </div>

      <div className="px-8 text-gray-500 flex justify-between">
        <p>
          Built by{" "}
          <Link
            href={siteConfig.links.github}
            className="underline text-gray-700 font-semibold"
          >
            Omor Hawlader
          </Link>
          . Hosted on Vercel. Illustrations by Popsy. The source code is
          available on{" "}
          <Link
            href={siteConfig.links.github}
            className="underline text-gray-700 font-semibold"
          >
            GitHub.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
