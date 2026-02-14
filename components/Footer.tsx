import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-accent">Al Maryam</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Connecting Talent with Global Opportunity. Your trusted partner for ethical and efficient overseas recruitment solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {["About Us", "Services", "Vision & Mission", "Our Team", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Our Services</h4>
                        <ul className="space-y-2">
                            {["Overseas Recruitment", "Contract Staffing", "Executive Search", "HR Consulting"].map((item) => (
                                <li key={item} className="text-muted-foreground text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                                <span className="text-muted-foreground text-sm">
                                    Al Malik Centre, 1st Floor, Office No: 109<br />
                                    Zakir Nagar, Jamshedpur – 831012
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent" />
                                <span className="text-muted-foreground text-sm">
                                    +91 912 205 8889<br />+91 900 635 8889
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent" />
                                <span className="text-muted-foreground text-sm">
                                    info.almaryam@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Al Maryam Manpower Consultancy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
