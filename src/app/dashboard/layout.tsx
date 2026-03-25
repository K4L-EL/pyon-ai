import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const sidebarLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/dashboard", icon: FolderKanban, label: "Projects" },
  { href: "/dashboard", icon: MessageSquare, label: "Messages" },
  { href: "/dashboard", icon: Settings, label: "Settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[85vh] pt-20">
      <Container className="py-8">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block" aria-label="Dashboard navigation">
            <nav className="rounded-xl border border-border bg-muted/50 p-4 sticky top-24">
              <div className="mb-4 px-3">
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                  Dashboard
                </p>
              </div>
              <ul className="space-y-1">
                {sidebarLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/4 hover:text-foreground"
                    >
                      <link.icon size={18} aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/login"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-red-500/10 hover:text-red-400"
                >
                  <LogOut size={18} aria-hidden="true" />
                  Sign Out
                </Link>
              </div>
            </nav>
          </aside>

          <div>{children}</div>
        </div>
      </Container>
    </div>
  );
}
