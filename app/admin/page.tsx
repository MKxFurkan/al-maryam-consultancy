import { prisma } from "@/lib/db";
import { Briefcase, FileText, Users, TrendingUp } from "lucide-react";
import { Job, Blog } from "@prisma/client";

async function getData() {
    "use server";
    try {
        const jobs = await prisma.job.findMany({ orderBy: { createdAt: 'desc' } });
        const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
        return { jobs, blogs };
    } catch (e) {
        console.error("Failed to fetch data", e);
        return { jobs: [], blogs: [] };
    }
}

export default async function AdminDashboard() {
    const { jobs, blogs } = await getData();

    const stats = [
        { label: "Active Jobs", value: jobs.length, icon: Briefcase, color: "text-blue-500" },
        { label: "Blog Posts", value: blogs.length, icon: FileText, color: "text-green-500" },
        { label: "Applications", value: "12", icon: Users, color: "text-purple-500" }, // Mock
        { label: "Total Views", value: "1.2k", icon: TrendingUp, color: "text-orange-500" }, // Mock
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold text-foreground">Dashboard Overview</h1>
                <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-card p-6 rounded-xl border border-white/5 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg bg-secondary/50 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                        </div>
                        <h3 className="text-muted-foreground font-medium">{stat.label}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-xl border border-white/5">
                    <h3 className="text-xl font-bold mb-4">Recent Jobs</h3>
                    <div className="space-y-4">
                        {jobs.slice(0, 3).map((job: Job) => (
                            <div key={job.id} className="flex justify-between items-center p-4 bg-secondary/20 rounded-lg">
                                <div>
                                    <h4 className="font-bold">{job.title}</h4>
                                    <p className="text-sm text-muted-foreground">{job.location}</p>
                                </div>
                                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{job.type}</span>
                            </div>
                        ))}
                        {jobs.length === 0 && <p className="text-muted-foreground">No jobs posted.</p>}
                    </div>
                </div>

                <div className="bg-card p-6 rounded-xl border border-white/5">
                    <h3 className="text-xl font-bold mb-4">Recent News</h3>
                    <div className="space-y-4">
                        {blogs.slice(0, 3).map((blog: Blog) => (
                            <div key={blog.id} className="flex justify-between items-center p-4 bg-secondary/20 rounded-lg">
                                <div>
                                    <h4 className="font-bold truncate max-w-[200px]">{blog.title}</h4>
                                    <p className="text-sm text-muted-foreground">{new Date(blog.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                        {blogs.length === 0 && <p className="text-muted-foreground">No blog posts.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
