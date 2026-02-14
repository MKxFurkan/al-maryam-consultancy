import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/50 via-primary to-primary" />
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground tracking-tight mb-6">
                    Connecting Talent with <br />
                    <span className="text-accent">Global Opportunity</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                    Professional overseas recruitment and manpower solutions for growing industries worldwide. Trust Al Maryam to build your workforce.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                        <Link href="/contact">
                            Hire Talent <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10" asChild>
                        <Link href="/jobs">
                            Find Jobs
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
