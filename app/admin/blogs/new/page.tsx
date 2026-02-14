"use client";

import { createBlogAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewBlogPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-foreground">Write a New Post</h1>
                <p className="text-muted-foreground">Share industry insights and company news.</p>
            </div>

            <form action={createBlogAction} className="space-y-6 bg-card p-8 rounded-xl border border-white/5">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Post Title</label>
                    <Input name="title" placeholder="e.g. 5 Tips for Interview Success" required className="bg-secondary/50" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Author</label>
                    <Input name="author" placeholder="e.g. Admin" required className="bg-secondary/50" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Content</label>
                    <Textarea name="content" placeholder="Write your post here..." required className="min-h-[300px] bg-secondary/50 font-mono text-sm" />
                </div>

                <div className="pt-4 flex gap-4">
                    <Button type="submit" variant="gold" className="w-full">Publish Post</Button>
                    <Button type="button" variant="outline" className="w-full" onClick={() => window.history.back()}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}
