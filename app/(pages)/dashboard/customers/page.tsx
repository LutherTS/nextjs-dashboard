import { InvoicesTableSkeleton } from "@/app/ui/components/dashboard/skeletons";
import Search from "@/app/ui/components/dashboard/search";
import Pagination from "@/app/ui/components/dashboard/pagination";
import Table from "@/app/ui/components/dashboard/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { fetchCustomersPages } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1
          className={`${lusitana.className} mt-2 text-xl dark:text-white
        md:text-2xl`}
        >
          Customers
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>
      <Suspense
        // key={query}
        key={query + currentPage}
        fallback={<InvoicesTableSkeleton />}
      >
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center ">
        {/* <Pagination totalPages={totalPages} /> */}
        {totalPages > 0 && <Pagination totalPages={totalPages} />}
      </div>
      {totalPages === 0 && (
        <div className="mt-2 text-center text-sm text-red-500">
          <p>No results found.</p>
        </div>
      )}
    </div>
  );
}
