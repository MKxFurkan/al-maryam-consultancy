"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

export default function AdminLogin() {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full max-w-md p-8 bg-card border border-white/5 rounded-2xl shadow-2xl relative z-10 backdrop-blur-sm">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-secondary/30 mb-4 border border-white/5">
                        <Lock className="w-8 h-8 text-gold" />
                    </div>
                    <h1 className="text-2xl font-serif font-bold text-foreground">Admin Access</h1>
                    <p className="text-muted-foreground mt-2 text-sm">Enter your credentials to continue</p>
                </div>

                <form action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="admin@almaryam.com"
                            className="bg-secondary/50 border-white/5 focus:border-gold/50"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">Password</label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="bg-secondary/50 border-white/5 focus:border-gold/50"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-medium py-6 mt-4"
                        disabled={isPending}
                    >
                        {isPending ? "Authenticating..." : "Login to Dashboard"}
                    </Button>

                    <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                        {errorMessage && (
                            <p className="text-sm text-red-500 w-full text-center bg-red-500/10 p-2 rounded border border-red-500/20">
                                Invalid credentials. Please try again.
                            </p>
                        )}
                    </div>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-xs text-muted-foreground">
                        Protected Layout. Restricted Access Only.
                    </p>
                </div>
            </div>
        </div>
    );
}
