import AcmeLogo from "@/app/ui/components/acme-logo";
import LoginForm from "@/app/ui/components/login/login-form";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="mx-auto relative flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href="/">
              <AcmeLogo />
            </Link>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}

/* Notes
Aborting page register. The idea of this app is designed for a single user.
However...
I could contemplate adding customers. But then that would require adapting the revenue page... But no, since it's already explicitly representational only. (I even wront it on the dashboard page.)
*/
