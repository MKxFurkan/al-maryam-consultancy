import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Prisma } from "@prisma/client";

type ApplicationWithJob = Prisma.ApplicationGetPayload<{
    include: { job: true }
}>;

export default async function AdminApplicationsPage() {
    const applications = await prisma.application.findMany({
        orderBy: { createdAt: 'desc' },
        include: { job: true }
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif font-bold text-foreground">Applications</h1>
                <div className="text-sm text-muted-foreground">
                    Total: {applications.length}
                </div>
            </div>

            <div className="bg-card rounded-xl border border-white/5 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-secondary/50 border-b border-white/5">
                        <tr>
                            <th className="p-4 font-medium text-muted-foreground">Candidate</th>
                            <th className="p-4 font-medium text-muted-foreground">Role Applied</th>
                            <th className="p-4 font-medium text-muted-foreground">Contact</th>
                            <th className="p-4 font-medium text-muted-foreground">Date</th>
                            <th className="p-4 font-medium text-muted-foreground text-right">Resume</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {applications.map((app: ApplicationWithJob) => (
                            <tr key={app.id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-medium">
                                    <div>{app.name}</div>
                                </td>
                                <td className="p-4 text-muted-foreground">
                                    {app.job?.title || "Unknown Job"}
                                </td>
                                <td className="p-4 text-sm text-muted-foreground">
                                    <div>{app.email}</div>
                                    <div>{app.phone}</div>
                                </td>
                                <td className="p-4 text-muted-foreground">{new Date(app.createdAt).toLocaleDateString()}</td>
                                <td className="p-4 text-right">
                                    {app.resumeUrl ? (
                                        <Button variant="ghost" size="sm" asChild>
                                            <a href={app.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                                                <Download className="w-4 h-4 mr-2" /> Download
                                            </a>
                                        </Button>
                                    ) : (
                                        <span className="text-muted-foreground text-xs">No File</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {applications.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-muted-foreground">
                                    No applications received yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
