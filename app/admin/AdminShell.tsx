"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, FileText, Users, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AdminShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Manage Jobs", href: "/admin/jobs", icon: Briefcase },
        { name: "Manage Blog", href: "/admin/blogs", icon: FileText },
        { name: "Applications", href: "/admin/applications", icon: Users },
    ];

    return (
        <div className="flex min-h-screen bg-background">
            <aside className="w-64 bg-card border-r border-white/5 hidden md:flex flex-col">
                <div className="p-6 border-b border-white/5">
                    <h1 className="text-xl font-serif font-bold text-accent">Al Maryam Admin</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                pathname === item.href
                                    ? "bg-accent text-accent-foreground font-medium"
                                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                            }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        Logout
                    </Button>
                </div>
            </aside>

            <main className="flex-1 overflow-auto bg-background">
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}

