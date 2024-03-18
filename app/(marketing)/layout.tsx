import { marketingConfig } from "@/config/marketing";
import Header from "./components/header";
import Footer from "./components/footer";
import { ModeToggle } from "@/components/mode-theme";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden h-screen">
      <ModeToggle />
      <Header items={marketingConfig.mainNav} />
      {children}
      <Footer />
    </div>
  );
}
