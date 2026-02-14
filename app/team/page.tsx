import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Mohammad Abu Kamran Khan",
        role: "Managing Director",
        bio: "With over 15 years in international recruitment, Mohammad leads Al Maryam with a vision for ethical and efficient manpower solutions. His strategic direction drives the company’s global expansion.",
        focus: "Strategic Leadership, Global Partnerships",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" // Placeholder
    },
    {
        name: "Mirza Fazal Baig",
        role: "Founder & Business Consulting Manager",
        bio: "As the founder, Mirza laid the ethical foundation of Al Maryam. He specializes in business consulting and ensuring that our recruitment strategies align with client business goals.",
        focus: "Business Consulting, Client Relations",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" // Placeholder
    },
    {
        name: "Samina Amber Mirza",
        role: "HR & Talent Acquisition Specialist",
        bio: "Samina brings a human-centric approach to recruitment. She ensures that every candidate is not just a resume but a potential asset, focusing on cultural fit and long-term retention.",
        focus: "Talent Acquisition, Candidate Relations",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" // Placeholder
    }
];

export default function TeamPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Our Leadership Team"
                description="Meet the visionaries behind Al Maryam Manpower Consultancy."
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                {/* In a real app, use next/image with actual assets. Using div bg for placeholder flexibility */}
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${member.image})` }}></div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-serif font-bold text-foreground">{member.name}</h3>
                                    <span className="text-accent text-sm font-medium">{member.role}</span>
                                </div>

                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    {member.bio}
                                </p>

                                <div className="border-t border-white/5 pt-4">
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">Key Focus</span>
                                    <p className="text-sm font-medium text-foreground">{member.focus}</p>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    {/* Social placeholders */}
                                    <button className="text-muted-foreground hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></button>
                                    <button className="text-muted-foreground hover:text-accent transition-colors"><Mail className="w-5 h-5" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
