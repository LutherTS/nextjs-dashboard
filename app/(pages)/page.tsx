import AcmeLogo from "@/app/ui/components/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    // Personally added md:max-h-screen, px-6 instead of p-6 py-4
    // Now opting for a p-4 instead of px-6 py-4
    <main className="flex min-h-screen flex-col p-4 md:max-h-screen">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 dark:bg-gray-100 dark:text-black md:w-2/5 md:px-20">
          {/* <div
            className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          />
          Replaced later on below with CSS Modules according to the course. */}
          <div className="flex w-20 content-center justify-between">
            <div className={styles.shape}></div>
            <Image
              // <img // Even here there still are next.config.js issues.
              className="rounded grayscale"
              src="https://ts8v2xbiemab19zt.public.blob.vercel-storage.com/nintendobserver-xvftAXYaUIJbUqSgl8gDCx72Rh4Znl.jpg"
              width={30}
              height={30}
              alt="My first blob on Vercel Storage"
            />
          </div>
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 dark:rounded-lg dark:bg-gray-100 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile versions"
          />
        </div>
      </div>
    </main>
  );
}
