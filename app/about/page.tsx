import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="About Al Maryam"
                description="A trusted name in overseas recruitment, connecting people with possibilities."
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-accent">Our Story</h2>
                        <div className="prose prose-invert prose-lg text-muted-foreground">
                            <p>
                                Based in Jamshedpur, India, Al Maryam Manpower Consultancy has established itself as a beacon of trust and efficiency in the overseas recruitment industry. We specialize in sourcing and deploying skilled, semi-skilled, and unskilled workforce to the Gulf, Middle East, and Asian regions.
                            </p>
                            <p>
                                Our journey began with a simple vision: to create a transparent, ethical, and seamless bridge between talented individuals in India and growing industries abroad. Today, we are proud to be a preferred partner for numerous leading organizations across various sectors.
                            </p>
                        </div>

                        <div className="border-l-4 border-accent pl-6 py-2 my-8 bg-secondary/10 rounded-r-lg">
                            <p className="text-xl italic font-serif text-foreground">
                                "We don't just fill vacancies; we build careers and empower businesses."
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            {/* Placeholder for About Us Image */}
                            <div className="aspect-[4/5] bg-secondary/50 flex items-center justify-center relative bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-primary/20"></div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-3xl"></div>
                    </div>
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold mb-4">Why We Are Different</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our commitment to excellence sets us apart in the competitive landscape of manpower consultancy.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        "Ethical Recruitment Practices",
                        "End-to-End Visa & Doc Processing",
                        "Rigorous Candidate Screening",
                        "Wide Network in Gulf & MENA",
                        "Post-Deployment Support",
                        "Transparent Commercials"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-card p-4 rounded-lg border border-white/5">
                            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                            <span className="font-medium text-foreground">{item}</span>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
