import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminShell from "./AdminShell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/admin/login"); // Redirect to login if not admin
  }

  return <AdminShell>{children}</AdminShell>;
}
// console.log(session);
