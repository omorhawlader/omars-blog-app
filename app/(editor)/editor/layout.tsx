import { Button } from "@/components/ui/button";
import { ChevronLeft, Loader2 } from "lucide-react";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="p-8">{children}</main>;
}
