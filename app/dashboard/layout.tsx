import RedirectCom from "@/components/redirectcom";
import DashboardHeader from "./components/header";
import Test from "./components/test";
import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Sitebar from "./components/sidebar";
import Footer from "../(marketing)/components/footer";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isAuthenticated } = getKindeServerSession();
  const check = await isAuthenticated();
  return check ? (
    <main className="w-screen overflow-x-hidden min-h-screen">
      <DashboardHeader />
      <div className="flex">
        <Sitebar />
        {children}
      </div>
      {/* <Footer */}
    </main>
  ) : (
    <div>
      <RedirectCom path="/" />
    </div>
  );
}
