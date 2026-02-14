import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, Globe, Users, Briefcase, UserCheck, Layers } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            id: "overseas-recruitment",
            title: "Overseas Recruitment",
            icon: Globe,
            description: "Our core expertise lies in sourcing and deploying top talent across borders. We specialize in connecting skilled Indian professionals with employers in the Gulf, Middle East, and Asian regions.",
            benefits: [
                "Extensive database of pre-screened candidates",
                "End-to-end visa and documentation support",
                "Strict adherence to international labor laws",
                "Cost-effective recruitment solutions"
            ]
        },
        {
            id: "contract-staffing",
            title: "Contract / Temporary Staffing",
            icon: Users,
            description: "Flexible staffing solutions designed to meet short-term project demands, seasonal peaks, or temporary workforce gaps without long-term commitment.",
            benefits: [
                "Rapid mobilization of workforce",
                "Reduced administrative burden",
                "Compliance management included",
                "Scalable workforce options"
            ]
        },
        {
            id: "executive-search",
            title: "Executive Search",
            icon: UserCheck,
            description: "We hunt for leadership talent that fits your company culture and strategic goals. Our executive search process is discreet, rigorous, and results-oriented.",
            benefits: [
                "Access to passive candidate networks",
                "Deep industry market intelligence",
                "Confidential hiring process",
                "Focus on C-suite and senior management"
            ]
        },
        {
            id: "hr-consulting",
            title: "HR Support & Consulting",
            icon: Briefcase,
            description: "Beyond recruitment, we offer comprehensive HR consulting services to help you optimize your workforce management and compliance strategies.",
            benefits: [
                "Policy formulation and implementation",
                "Compensation and benefits benchmarking",
                "Employee improved retention strategies",
                "Performance management systems"
            ]
        },
        {
            id: "bulk-hiring",
            title: "Bulk Hiring",
            icon: Layers,
            description: "For large-scale industrial, construction, or hospitality projects, we organize mass recruitment drives to fill hundreds of positions efficiently.",
            benefits: [
                "Dedicated project recruitment teams",
                "On-ground logistics support",
                "Skill testing and trade testing coordination",
                "Volume hiring efficiency"
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Our Services"
                description="Comprehensive manpower solutions tailored to drive your business forward."
            />

            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-12">
                    {services.map((service, index) => (
                        <div key={service.id} className={`group relative bg-card rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-accent/30 p-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-accent">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{service.title}</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Key Benefits</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <Check className="w-4 h-4 text-accent mt-1" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Button variant="outline" asChild>
                                        <Link href="/contact">Inquire Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Section className="bg-primary text-primary-foreground">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold mb-6">Our Recruitment Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-white/10 -z-0"></div>

                        {[
                            { step: "01", title: "Assessment", desc: "Understanding client needs" },
                            { step: "02", title: "Sourcing", desc: "Identifying top talent" },
                            { step: "03", title: "Selection", desc: "Screening & Interviewing" },
                            { step: "04", title: "Deployment", desc: "Onboarding & Visa" }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center mb-4 text-lg">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-white/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
