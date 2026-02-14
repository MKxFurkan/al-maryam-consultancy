import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";
import { deleteBlogAction } from "@/app/actions";
import { Blog } from "@prisma/client";

export default async function AdminBlogsPage() {
    const blogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif font-bold text-foreground">Manage Blogs</h1>
                <Button variant="gold" asChild>
                    <Link href="/admin/blogs/new">
                        <Plus className="w-4 h-4 mr-2" /> Write New Post
                    </Link>
                </Button>
            </div>

            <div className="bg-card rounded-xl border border-white/5 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-secondary/50 border-b border-white/5">
                        <tr>
                            <th className="p-4 font-medium text-muted-foreground">Title</th>
                            <th className="p-4 font-medium text-muted-foreground">Author</th>
                            <th className="p-4 font-medium text-muted-foreground">Date</th>
                            <th className="p-4 font-medium text-muted-foreground text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {blogs.map((blog: Blog) => (
                            <tr key={blog.id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-medium">{blog.title}</td>
                                <td className="p-4 text-muted-foreground">{blog.author || 'Admin'}</td>
                                <td className="p-4 text-muted-foreground">{new Date(blog.createdAt).toLocaleDateString()}</td>
                                <td className="p-4 text-right">
                                    <form action={async () => {
                                        "use server";
                                        await deleteBlogAction(blog.id);
                                    }}>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                        {blogs.length === 0 && (
                            <tr>
                                <td colSpan={4} className="p-8 text-center text-muted-foreground">
                                    No blog posts found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
