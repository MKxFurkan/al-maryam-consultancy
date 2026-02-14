import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createApplicationAction } from "@/app/actions";
import { redirect } from "next/navigation";

export default async function ApplyPage({ params }: { params: Promise<{ jobId: string }> }) {
    const { jobId } = await params;

    const job = await prisma.job.findUnique({
        where: { id: jobId }
    });

    if (!job) {
        return (
            <div className="min-h-screen pt-32 text-center">
                <h1 className="text-2xl font-bold">Job not found</h1>
                <Button asChild className="mt-4"><a href="/jobs">Back to Jobs</a></Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title={`Apply for ${job.title}`}
                description={`at ${job.location}`}
            />

            <Section>
                <div className="max-w-xl mx-auto bg-card border border-white/5 p-8 rounded-xl shadow-lg">
                    <form action={createApplicationAction} className="space-y-6">
                        <input type="hidden" name="jobId" value={jobId} />

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <Input name="name" placeholder="John Doe" required className="bg-secondary/50" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <Input name="email" type="email" placeholder="john@example.com" required className="bg-secondary/50" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <Input name="phone" type="tel" placeholder="+966 50..." required className="bg-secondary/50" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Resume (PDF/Doc)</label>
                            <Input type="file" name="resume" className="bg-secondary/50 cursor-pointer" />
                            <p className="text-xs text-muted-foreground">Mock upload for now.</p>
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold/90 text-primary-foreground">
                            Submit Application
                        </Button>
                    </form>
                </div>
            </Section>
        </div>
    );
}
