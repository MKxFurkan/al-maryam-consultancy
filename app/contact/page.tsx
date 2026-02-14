"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Contact Us"
                description="Get in touch with our team for recruitment solutions or career opportunities."
            />

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-foreground">Get in Touch</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Whether you are an employer looking for talent or a candidate seeking a job, we are here to assist you. Visit our office or contact us via phone or email.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1">Our Office</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Al Malik Centre, 1st Floor, Office No: 109<br />
                                        Zakir Nagar, Old Purulia Road, Road No: 1<br />
                                        Mango, Azad Nagar, Jamshedpur – 831012
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                                    <p className="text-muted-foreground text-sm space-y-1">
                                        <a href="tel:+919122058889" className="block hover:text-accent">+91 912 205 8889</a>
                                        <a href="tel:+919006358889" className="block hover:text-accent">+91 900 635 8889</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                                    <p className="text-muted-foreground text-sm space-y-1">
                                        <a href="mailto:info.almaryam@gmail.com" className="block hover:text-accent">info.almaryam@gmail.com</a>
                                        <a href="mailto:almaryam.sourcenet@gmail.com" className="block hover:text-accent">almaryam.sourcenet@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1">Business Hours</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Monday - Saturday: 9:30 AM - 6:30 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-2xl border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Send us a Message</h3>

                        {submitted ? (
                            <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg text-center animate-in fade-in zoom-in">
                                <p className="font-bold">Message Sent!</p>
                                <p className="text-sm">We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                        <Input id="name" placeholder="Your Name" required className="bg-secondary/50 border-white/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                                        <Input id="phone" placeholder="+91..." required className="bg-secondary/50 border-white/10" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                    <Input id="email" type="email" placeholder="you@example.com" required className="bg-secondary/50 border-white/10" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                                    <Input id="subject" placeholder="Inquiry about..." required className="bg-secondary/50 border-white/10" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                    <Textarea id="message" placeholder="How can we help you?" required className="min-h-[120px] bg-secondary/50 border-white/10" />
                                </div>

                                <Button type="submit" variant="gold" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>

            {/* Map Embed (Placeholder) */}
            <div className="w-full h-[400px] bg-secondary/20 relative grayscale hover:grayscale-0 transition-all duration-500">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.024976450684!2d86.202!3d22.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzAwLjAiTiA4NsKwMTInMDcuMiJF!5e0!3m2!1sen!2sin!4v1625648!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
            </div>
        </div>
    );
}
