import Head from "next/head";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const siteTitle = "Next.js Sample Website";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { children, ...customMeta } = props;
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-imagevercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col justify-center px-8"></div>
      <main className="flex flex-col justify-center px-8 bg-stone-800 dark:bg-gray-900">
        {children}
        <Footer />
      </main>
    </div>
  );
}
