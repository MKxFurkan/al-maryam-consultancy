import { Section } from "./ui/section";
import { Globe, Users, Briefcase, UserCheck, Layers } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const services = [
    {
        icon: Globe,
        title: "Overseas Recruitment",
        description: "Sourcing skilled professionals for placements across Gulf, Middle East, and Asian regions.",
    },
    {
        icon: Users,
        title: "Contract Staffing",
        description: "Flexible temporary staffing solutions to meet short-term project demands efficiently.",
    },
    {
        icon: UserCheck,
        title: "Executive Search",
        description: "Headhunting top-tier leadership talent for critical management roles.",
    },
    {
        icon: Briefcase,
        title: "HR Consulting",
        description: "Comprehensive HR support including compliance, visa processing, and onboarding.",
    },
    {
        icon: Layers,
        title: "Bulk Hiring",
        description: "Mass recruitment drives for large-scale industrial and construction projects.",
    },
];

export function ServicesPreview() {
    return (
        <Section className="bg-secondary/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Expertise</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Delivering comprehensive manpower solutions tailored to your industry needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-card border border-white/5 p-8 rounded-xl hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                    >
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button variant="link" className="text-accent" asChild>
                    <Link href="/services">View All Services &rarr;</Link>
                </Button>
            </div>
        </Section>
    );
}
