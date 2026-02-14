import { Section } from "./ui/section";
import { CheckCircle2, Globe2, ShieldCheck, Zap } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Transparent & Ethical",
        description: "We adhere to the highest standards of integrity and transparency in our recruitment processes, ensuring fair treatment for both employers and candidates.",
    },
    {
        icon: Globe2,
        title: "Global Network",
        description: "Our extensive network across India and the Gulf region allows us to source the best talent and connect them with top-tier employers.",
    },
    {
        icon: CheckCircle2,
        title: "Industry Expertise",
        description: "With years of experience in overseas recruitment, we understand the specific needs of various industries including construction, oil & gas, and healthcare.",
    },
    {
        icon: Zap,
        title: "Fast & Efficient",
        description: "Our streamlined screening and selection process ensures quick turnaround times without compromising on quality.",
    },
];

export function WhyChooseUs() {
    return (
        <Section className="bg-primary text-primary-foreground">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">Why Choose Al Maryam?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    We build lasting partnerships based on trust, quality, and reliability.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
                            <feature.icon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
