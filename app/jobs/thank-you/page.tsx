import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="py-20">
                <div className="max-w-md mx-auto text-center space-y-6">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-500">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h1 className="text-3xl font-serif font-bold">Application Received!</h1>
                    <p className="text-muted-foreground">
                        Thank you for your interest. Our recruitment team will review your profile and contact you if shortlisted.
                    </p>
                    <Button asChild variant="gold">
                        <Link href="/jobs">Browse More Jobs</Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
