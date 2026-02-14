import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <div id="company-overview">
        <Section>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <span className="text-accent font-bold tracking-wider uppercase text-sm">About Al Maryam</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Your Trusted Partner in Global Manpower Solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Al Maryam Manpower Consultancy is a premier recruitment agency based in Jamshedpur, India, dedicated to bridging the gap between skilled talent and international employers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a focus on the Gulf, Middle East, and Asian regions, we specialize in providing tailored workforce solutions that drive business success. Our commitment to ethical practices and rigorous screening ensures that we deliver only the best candidates.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">Read More About Us</Link>
              </Button>
            </div>
            <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Placeholder for Office Image */}
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                <span className="text-muted-foreground">Office / Team Image Placeholder</span>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-75" />
            </div>
          </div>
        </Section>
      </div>

      <ServicesPreview />

      <WhyChooseUs />

      <Section className="bg-accent text-accent-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Build Your Dream Team?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Partner with us for efficient, reliable, and improved recruitment processes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
