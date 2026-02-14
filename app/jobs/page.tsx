import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import Link from "next/link"; // Ensure Link is imported
import { Job } from "@prisma/client";

export default async function JobsPage() {
    const jobs = await prisma.job.findMany({
        where: { isActive: true },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Find Your Next Opportunity"
                description="Browse our latest job openings across the Gulf, Middle East, and Asia."
            />

            <Section>
                <div className="grid gap-6">
                    {jobs.map((job: Job) => (
                        <div key={job.id} className="bg-card border border-white/5 rounded-xl p-6 md:p-8 hover:border-accent/30 transition-all shadow-lg flex flex-col md:flex-row gap-6 md:items-center justify-between group">
                            <div className="space-y-4 flex-1">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                                    {job.description}
                                </p>
                                <div className="text-sm font-medium text-accent">
                                    Salary: {job.salary}
                                </div>
                            </div>

                            <div className="flex-shrink-0">
                                <Button variant="outline" asChild>
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </div>
                        </div>
                    ))}

                    {jobs.length === 0 && (
                        <div className="text-center py-16 bg-secondary/10 rounded-xl">
                            <h3 className="text-xl font-bold text-foreground">No openings active mostly</h3>
                            <p className="text-muted-foreground mt-2">Please check back later or send us your CV directly.</p>
                            <Button variant="link" className="mt-4 text-accent" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </Section>
        </div>
    );
}
