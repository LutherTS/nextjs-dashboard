import Breadcrumbs from "@/app/ui/components/dashboard/invoices/breadcrumbs";
import Form from "@/app/ui/components/dashboard/invoices/edit-form";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
    // Which fixed the
    // @ts-ignore // Something something undefined.
    // issue I had on invoice={invoice}.
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}

/* Note
Yup, id has to be id. I assume it needs to be the as in the params. 
*/
