import { siteConfig } from "@/config/site-map";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-screen h-[45vh] flex flex-col justify-between ">
      <div className="mt-20 text-center">
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

      <div className="px-8 text-gray-500 flex justify-between mb-4 dark:text-gray-50">
        <p>
          Built by{" "}
          <Link
            href={siteConfig.links.github}
            className="underline text-gray-700 font-semibold dark:text-gray-400"
          >
            Omor Hawlader
          </Link>
          . Hosted on Vercel. Illustrations by Popsy. The source code is
          available on{" "}
          <Link
            href={siteConfig.links.github}
            className="underline dark:text-gray-400 text-gray-700 font-semibold"
          >
            GitHub.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
