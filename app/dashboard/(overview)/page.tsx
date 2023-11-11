// import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
// import { CardWrapper } from '@/app/ui/dashboard/cards';
// Since it's default, it's not inside an object.
import CardWrapper from '@/app/ui/dashboard/cards'
import { Metadata } from 'next';

import { auth } from '@/auth'

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
  const session = await auth()

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl mt-2 md:text-2xl dark:text-white`}>
        {/* Dashboard */}
        Hello {session?.user?.name}, and welcome to your Dashboard.
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

/* Understanding the previous sql results
  console.log(revenue) // Here is the return from the database: 
    [
      { month: 'Jan', revenue: 2000 },
      { month: 'Feb', revenue: 1800 },
      { month: 'Mar', revenue: 2200 },
      { month: 'Apr', revenue: 2500 },
      { month: 'May', revenue: 2300 },
      { month: 'Jun', revenue: 3200 },
      { month: 'Jul', revenue: 3500 },
      { month: 'Aug', revenue: 3700 },
      { month: 'Sep', revenue: 2500 },
      { month: 'Oct', revenue: 2800 },
      { month: 'Nov', revenue: 3000 },
      { month: 'Dec', revenue: 4800 }
    ]

  console.log(latestInvoices) // Here is the return from the database:
    [
      {
        amount: '$89.45',
        name: 'Delba de Oliveira',
        image_url: '/customers/delba-de-oliveira.png',
        email: 'delba@oliveira.com',
        id: '33cf7c8d-a5d4-4ad0-b9ec-18c38dc80d2e'
      },
      {
        amount: '$448.00',
        name: 'Steven Tey',
        image_url: '/customers/steven-tey.png',
        email: 'steven@tey.com',
        id: 'adce4b9f-d06e-4bc7-9587-5c9a3cc15a6a'
      },
      {
        amount: '$5.00',
        name: 'Lee Robinson',
        image_url: '/customers/lee-robinson.png',
        email: 'lee@robinson.com',
        id: 'e53f62c3-1642-4675-91ea-d9e5fcbfe4a3'
      },
      {
        amount: '$345.77',
        name: 'Michael Novotny',
        image_url: '/customers/michael-novotny.png',
        email: 'michael@novotny.com',
        id: '3b0a70b4-796d-448f-a65c-a1196d3b113b'
      },
      {
        amount: '$542.46',
        name: 'Emil Kowalski',
        image_url: '/customers/emil-kowalski.png',
        email: 'emil@kowalski.com',
        id: 'a4343ba6-83c2-4d1e-83c9-b3016a6ad201'
      }
    ]

  console.log(numberOfCustomers) // Here is the return from the database: 
    10

  console.log(numberOfInvoices) // Here is the return from the database: 
    15

  console.log(totalPaidInvoices) // Here is the return from the database: 
    $1,185.16

  console.log(totalPendingInvoices) // Here is the return from the database: 
    $1,256.32

  console.log(session) // IT WORKS!!! // Here's the result from NextAuth:
    {
      user: { 
        name: 'User', 
        email: 'user@nextmail.com' 
      },
      expires: '2023-12-10T15:53:53.262Z'
    }
  And so now we could do something like: 
  if (session.user.username === URLparams user) {
    can access the page
  } else {
    redirect to /users/user
  }
*/
