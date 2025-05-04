import AdminSidebar from "@/components/AdminSidebar";
import AuthGuard from "@/components/AuthGuard";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="min-h-screen flex">
        <AdminSidebar />
        <Toaster position="top-center" />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </AuthGuard>
  );
}