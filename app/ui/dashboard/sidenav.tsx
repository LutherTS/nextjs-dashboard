import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
// import { PlusIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  // const pathname = usePathname();

  return (
    // Replaced md:px-2 by md:px-4
    <div className="flex h-full flex-col px-3 py-4 md:px-4">
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
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* <Link
          key={'Create Invoice'}
          href={'/dashboard/invoices/create'}
          // Personally added transitions.
          className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 transition transition-duration-[50ms] md:flex-none md:justify-start md:p-2 md:px-3",
            {
              'bg-sky-100 text-blue-600 hover:text-blue-700 transition transition-duration-200': pathname === '/dashboard/invoices/create',
            },
          )}
        >
          <PlusIcon className="w-6" />
          <p className="hidden md:block">{'Create Invoice'}</p>
        </Link> */}
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

// Create Invoice is better in Nav Links at this time. 
