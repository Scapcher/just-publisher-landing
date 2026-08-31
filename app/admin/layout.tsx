import { AdminSidebar } from "./_components/AdminSidebar";

export const metadata = { title: "Admin — JustPublisher", robots: "noindex" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen" style={{ background: "#F5F5F0" }}>
      <AdminSidebar />

      {/* Content — mobilde top bar için padding-top 56px */}
      <main
        className="flex-1 pt-14 md:pt-0 px-4 py-5 md:px-12 md:py-10"
        style={{ maxWidth: 960, color: "#2C2418" }}
      >
        {children}
      </main>
    </div>
  );
}
