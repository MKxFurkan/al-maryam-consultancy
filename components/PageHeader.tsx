import { Section } from "./ui/section";

interface PageHeaderProps {
    title: string;
    description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="bg-secondary/20 border-b border-white/5">
            <Section className="py-12 md:py-16">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">{title}</h1>
                {description && (
                    <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
                )}
            </Section>
        </div>
    );
}
