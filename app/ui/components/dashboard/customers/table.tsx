import Image from "next/image";
// import { lusitana } from '@/app/ui/fonts';
// import Search from '@/app/ui/search';
// import { CustomersTable, FormattedCustomersTable } from '@/app/lib/definitions';
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <div className="w-full">
      {/* <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." /> */}
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 dark:bg-gray-800 md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-white p-4 dark:bg-gray-100"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            {/* <Image */}
                            <img
                              // src={customer.image_url}
                              src={`https://ts8v2xbiemab19zt.public.blob.vercel-storage.com/${customer.slug}.png`}
                              className="rounded-full"
                              alt={`${customer.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{customer.total_invoices} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal dark:bg-gray-800 dark:text-white">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Pending
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers?.map((customer) => (
                    // first:rounded-t-md last:rounded-b-md nice try
                    <tr key={customer.id} className="group">
                      {/* Fixed rounded with ss and es */}
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-ss-md group-last-of-type:rounded-es-md dark:bg-gray-100 sm:pl-6">
                        <div className="flex items-center gap-3">
                          {/* Bigging images from 28 to 38 to equate the heights. */}
                          {/* <Image */}
                          <img
                            // src={customer.image_url}
                            src={`https://ts8v2xbiemab19zt.public.blob.vercel-storage.com/${customer.slug}.png`}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={38}
                            height={38}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-gray-100">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-gray-100">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-gray-100">
                        {customer.total_pending}
                      </td>
                      {/* Fixed rounded with se and ee */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-se-md group-last-of-type:rounded-ee-md dark:bg-gray-100">
                        {customer.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
