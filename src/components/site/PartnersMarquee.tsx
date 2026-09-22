import { partners } from "@/lib/site-data";

export function PartnersMarquee() {
  const row = (hidden: boolean) => (
    <div className="flex items-center gap-16 pr-16" aria-hidden={hidden || undefined}>
      {partners.map((p) => (
        <span key={p} className="font-display text-2xl font-semibold tracking-tight text-foreground/40">
          {p}
        </span>
      ))}
    </div>
  );

  return (
    <section className="overflow-hidden border-y bg-cream">
      <p className="sr-only">Nos partenaires : {partners.join(", ")}</p>
      <div className="py-8">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
