import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";
import { deleteJobAction } from "@/app/actions";
import { Job } from "@prisma/client";

export default async function AdminJobsPage() {
    const jobs = await prisma.job.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif font-bold text-foreground">Manage Jobs</h1>
                <Button variant="gold" asChild>
                    <Link href="/admin/jobs/new">
                        <Plus className="w-4 h-4 mr-2" /> Post New Job
                    </Link>
                </Button>
            </div>

            <div className="bg-card rounded-xl border border-white/5 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-secondary/50 border-b border-white/5">
                        <tr>
                            <th className="p-4 font-medium text-muted-foreground">Title</th>
                            <th className="p-4 font-medium text-muted-foreground">Location</th>
                            <th className="p-4 font-medium text-muted-foreground">Type</th>
                            <th className="p-4 font-medium text-muted-foreground">Posted Date</th>
                            <th className="p-4 font-medium text-muted-foreground text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {jobs.map((job: Job) => (
                            <tr key={job.id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-medium">{job.title}</td>
                                <td className="p-4 text-muted-foreground">{job.location}</td>
                                <td className="p-4">
                                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20">
                                        {job.type}
                                    </span>
                                </td>
                                <td className="p-4 text-muted-foreground">{new Date(job.createdAt).toLocaleDateString()}</td>
                                <td className="p-4 text-right">
                                    <form action={async () => {
                                        "use server";
                                        await deleteJobAction(job.id);
                                    }}>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                        {jobs.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-muted-foreground">
                                    No jobs found. Click "Post New Job" to add one.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
