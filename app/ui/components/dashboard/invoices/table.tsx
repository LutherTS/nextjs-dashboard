import InvoiceStatus from "@/app/ui/components/dashboard/invoices/status";
import {
  UpdateInvoice,
  DeleteInvoice,
} from "@/app/ui/components/dashboard/invoices/buttons";
import Image from "next/image";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredInvoices } from "@/app/lib/data";

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-md bg-gray-50 p-2 dark:bg-gray-800 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4 dark:bg-gray-100"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        // <img
                        // src={invoice.image_url}
                        src={`https://ts8v2xbiemab19zt.public.blob.vercel-storage.com/${invoice.customer_slug}.png`}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full rounded-md text-gray-900 md:table">
            {/* Replacing className, here are the originals:
            rounded-md text-left text-sm font-normal
            dark:text-white */}
            <thead className="rounded-md bg-gray-50 text-left text-sm font-normal dark:bg-gray-800 dark:text-white">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {/* Replacing className, here are the originals:
            bg-white
            dark:text-black dark:bg-gray-100 rounded-md */}
            <tbody className="divide-y divide-gray-200 text-gray-900">
              {invoices?.map((invoice) => (
                <tr key={invoice.id} className="group">
                  {/* Fixed rounded with ss and es */}
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-ss-md group-last-of-type:rounded-es-md dark:bg-gray-100 sm:pl-6">
                    <div className="flex items-center gap-3">
                      {/* Bigging images from 28 to 38 to equate the heights. */}
                      <Image
                        // <img
                        // src={invoice.image_url}
                        src={`https://ts8v2xbiemab19zt.public.blob.vercel-storage.com/${invoice.customer_slug}.png`}
                        className="rounded-full"
                        width={38}
                        height={38}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-gray-100">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-gray-100">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-gray-100">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-gray-100">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  {/* Fixed rounded with se and ee */}
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-se-md group-last-of-type:rounded-ee-md dark:bg-gray-100">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Notes
The reason why fetchFilteredInvoices(query, currentPage) gets called on pagination for example without me having to do anything is because every time the URL is changed either with replace(`${pathname}?${params.toString()}`) in Search or with createPageURL and its return `${pathname}?${params.toString()}` in pagination, it makes a new call to the server. 
However, while the request to the server is distinguished from the navigation in the client, which it is done on the client side because the initiators of this navigation, Search and Pagination, are client side components.
*/

/* Old blocks of code
<tr
  key={invoice.id} 
  // Removing none showing code below: 
  // [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg
  className="group
  w-full border-b py-5 text-sm last-of-type:border-none"
>
  <td className="whitespace-nowrap py-5 pl-6 pr-3">
    <div className="flex items-center gap-3">
      <Image
        src={invoice.image_url}
        className="rounded-full"
        width={38}
        height={38}
        alt={`${invoice.name}'s profile picture`}
      />
      <p>{invoice.name}</p>
    </div>
  </td>
  <td className="whitespace-nowrap px-3 py-5">
    {invoice.email}
  </td>
  <td className="whitespace-nowrap px-3 py-5">
    {formatCurrency(invoice.amount)}
  </td>
  <td className="whitespace-nowrap px-3 py-5">
    {formatDateToLocal(invoice.date)}
  </td>
  <td className="whitespace-nowrap px-3 py-5">
    <InvoiceStatus status={invoice.status} />
  </td>
  <td className="whitespace-nowrap py-5 pl-6 pr-3">
    <div className="flex justify-end gap-3">
      <UpdateInvoice id={invoice.id} />
      <DeleteInvoice id={invoice.id} />
    </div>
  </td>
</tr>
*/
