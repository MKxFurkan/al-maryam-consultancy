"use client";

import { createJobAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/PageHeader"; // Reusing visual header if useful, or just plain text

export default function NewJobPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-foreground">Post a New Job</h1>
                <p className="text-muted-foreground">Fill in the details to publish a new job opening.</p>
            </div>

            <form action={createJobAction} className="space-y-6 bg-card p-8 rounded-xl border border-white/5">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title</label>
                    <Input name="title" placeholder="e.g. Senior Civil Engineer" required className="bg-secondary/50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Location</label>
                        <Input name="location" placeholder="e.g. Riyadh, KSA" required className="bg-secondary/50" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Employment Type</label>
                        <select name="type" className="flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Salary Range</label>
                    <Input name="salary" placeholder="e.g. SAR 5000 - 8000" className="bg-secondary/50" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea name="description" placeholder="Detailed job description..." required className="min-h-[150px] bg-secondary/50" />
                </div>

                <div className="pt-4 flex gap-4">
                    <Button type="submit" variant="gold" className="w-full">Publish Job</Button>
                    <Button type="button" variant="outline" className="w-full" onClick={() => window.history.back()}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}
