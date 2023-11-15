import { clsx } from "clsx";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={clsx(lusitana.className, "flex text-xl mt-2 md:text-2xl")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-500"
            )}
          >
            <Link
              className={clsx(breadcrumb.active ? "cursor-default" : null)}
              href={breadcrumb.href}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block cursor-default">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
