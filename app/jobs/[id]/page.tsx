export const dynamic = "force-dynamic";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function JobDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const job = await prisma.job.findUnique({
        where: { id: id }
    });

    if (!job) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title={job.title}
                description={`Job Opening at ${job.location}`}
            />

            <Section>
                <div className="max-w-4xl mx-auto">
                    <Link href="/jobs" className="inline-flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Jobs
                    </Link>

                    <div className="bg-card border border-white/5 rounded-xl p-8 shadow-lg">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-white/5 pb-8">
                            <div>
                                <h1 className="text-3xl font-serif font-bold text-foreground mb-4">{job.title}</h1>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <div className="text-xl font-bold text-accent">{job.salary}</div>
                                <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary-foreground w-full md:w-auto" asChild>
                                    <Link href={`/apply/${job.id}`}>Apply Now</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-xl font-bold mb-4">Job Description</h3>
                            <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                                {job.description}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 text-center">
                            <h3 className="text-lg font-bold mb-4">Interested in this role?</h3>
                            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary-foreground" asChild>
                                <Link href={`/apply/${job.id}`}>Submit Your Application</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
