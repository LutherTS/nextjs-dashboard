"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon,
  },
  // Now made by myself.
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Create Invoice",
    href: "/dashboard/invoices/create",
    icon: PlusIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            // Personally added transitions.
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "transition-duration-200 bg-sky-100 text-blue-600 transition hover:text-blue-700 dark:bg-sky-100 dark:text-[#2F6FEB] dark:hover:text-blue-700":
                  pathname === link.href,
              },
              {
                "transition-duration-[50ms] bg-gray-50 transition hover:bg-sky-100 hover:text-blue-600 dark:bg-gray-800 dark:text-white":
                  pathname !== link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

/* Troubleshooting
No matter what class I put in there (dark:text-[#2F6FEB]), it just gets overridden. 
Original class:
"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 transition transition-duration-[50ms] md:flex-none md:justify-start md:p-2 md:px-3 dark:bg-gray-800 dark:text-white",
*/
