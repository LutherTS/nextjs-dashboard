import AcmeLogo from "@/app/ui/components/acme-logo";
import NavLinks from "@/app/ui/components/dashboard/nav-links";
import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function SideNav() {
  // const pathname = usePathname();

  return (
    // Replaced md:px-2 by md:px-4
    // Now trying px-4 on mobile
    <div className="flex h-full flex-col px-4 py-4 md:px-4">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div
          className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-gray-800
        md:block"
        ></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="transition-duration-[50ms] flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium transition hover:bg-sky-100 hover:text-blue-600 dark:bg-gray-800 dark:text-white md:flex-none md:justify-start
          md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

// Create Invoice is better in Nav Links at this time.
