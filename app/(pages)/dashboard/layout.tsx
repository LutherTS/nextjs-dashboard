import SideNav from "@/app/ui/components/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* Modifying the padding on md: from md:p-12
      Going for a p-4 on mobile instead of p-6 */}
      <div className="flex-grow px-4 pb-8 md:overflow-y-auto md:py-6 md:px-12">
        {children}
      </div>
    </div>
  );
}
