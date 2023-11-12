import { InvoicesTableSkeleton } from '@/app/ui/components/dashboard/skeletons';
import Search from '@/app/ui/components/dashboard/search';
import Pagination from '@/app/ui/components/dashboard/pagination';
import { CreateInvoice } from '@/app/ui/components/dashboard/invoices/buttons';
import Table from '@/app/ui/components/dashboard/invoices/table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-xl mt-2 md:text-2xl
        dark:text-white`}>
          Invoices
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
        {(totalPages > 0) && <Pagination totalPages={totalPages} />}
      </div>
      {(totalPages === 0) && (
        <div
          className="mt-2 text-sm text-center text-red-500"
        >
          <p>No results found.</p>
        </div>
      )}
    </div>
  );
}

/* Notes
Here's how the data flow went: 
1) The data started from the Search CLIENT component where inputs from the client were placed into the URL. 
2) Then from the URL the data was captured from the invoices Page SERVER (async) component, where the query was sent to the Table SERVER component. 
3) Finally, the Table SERVER component made the query directly to the database in order to update the table with the relevant data. 
*/
