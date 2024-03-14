import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { creatorName, siteConfig } from "@/config/site-map";
import { ThemeProvider } from "@/components/themeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["next.js 14", "next.js", "react", "tailwind css", "shadcn ui"],
  authors: [{ name: creatorName }],
  creator: creatorName,
  openGraph: {
    type: "website",
    locale: "es_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      {
        url: "/logo-light-64.svg",
        href: "/logo-light-64.svg",
      },
      {
        url: "/logo-dark-64.svg",
        href: "/logo-dark-64.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: ["/logo-light-16.svg"],
    apple: [
      { url: "/logo-light-64.svg" },
      { url: "/logo-light-86.svg", sizes: "186x186", type: "image/svg" },
    ],
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
