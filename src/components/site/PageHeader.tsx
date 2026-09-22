import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream">
      <div className="container-site py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance">{title}</h1>
        {description && <p className="mt-5 max-w-xl text-base text-foreground/70 text-pretty">{description}</p>}
        {children}
      </div>
    </section>
  );
}
