import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Target, Lightbulb, TrendingUp, Shield, Globe } from "lucide-react";

export default function VisionMissionPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Vision & Mission"
                description="The guiding principles that drive our commitment to excellence."
            />

            {/* Vision Section */}
            <Section>
                <div className="bg-gradient-to-br from-secondary to-primary border border-accent/20 rounded-2xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-1/3 -translate-y-1/3">
                        <Globe className="w-96 h-96" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 text-accent">
                            <Target className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Our Vision</h2>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            "To be a globally recognized leader in overseas recruitment, delivering trusted, ethical, and high-quality manpower solutions that empower businesses and transform lives."
                        </p>
                    </div>
                </div>
            </Section>

            {/* Mission Section */}
            <Section className="bg-secondary/20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Mission Pillars</h2>
                    <p className="text-muted-foreground">The core values that uphold our vision.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: Lightbulb,
                            title: "Candidate Development",
                            desc: "Identifying potential and providing the right platform for skills to flourish."
                        },
                        {
                            icon: Globe,
                            title: "Global Reach",
                            desc: "Bridging geographical gaps to connect talent with opportunities worldwide."
                        },
                        {
                            icon: Shield,
                            title: "Transparency & Trust",
                            desc: "Maintaining unwavering integrity in all our dealings with clients and candidates."
                        },
                        {
                            icon: TrendingUp,
                            title: "Continuous Improvement",
                            desc: "Constantly evolving our processes to meet the dynamic needs of the global market."
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6 p-8 rounded-xl bg-card border border-white/5 hover:border-accent/50 transition-colors">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-accent">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
