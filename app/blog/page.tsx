import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { Blog } from "@prisma/client";

export default async function BlogPage() {
    const blogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="News & Insights"
                description="Latest updates from Al Maryam and the recruitment industry."
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog: Blog) => (
                        <div key={blog.id} className="bg-card border border-white/5 rounded-xl overflow-hidden hover:border-accent/30 transition-all shadow-lg group flex flex-col">
                            {/* Placeholder image for blog */}
                            <div className="h-48 bg-secondary/30 relative">
                                <div className="absolute inset-0 bg-primary/10"></div>
                                <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-accent">
                                    News
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author || 'Admin'}</span>
                                </div>

                                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                    {blog.content}
                                </p>

                                <Link href="#" className="text-accent text-sm font-medium hover:underline mt-auto inline-block">
                                    Read Full Article &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}

                    {blogs.length === 0 && (
                        <div className="col-span-full text-center py-16 bg-secondary/10 rounded-xl">
                            <h3 className="text-xl font-bold text-foreground">No articles yet</h3>
                            <p className="text-muted-foreground mt-2">Check back soon for updates.</p>
                        </div>
                    )}
                </div>
            </Section>
        </div>
    );
}
