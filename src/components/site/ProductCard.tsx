import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/site-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/produits/$slug" params={{ slug: product.slug }} className="card-surface group block">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={768}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-medium tracking-tight">{product.name}</h3>
        <p className="mt-1 text-sm text-foreground/60 text-pretty">{product.short}</p>
      </div>
    </Link>
  );
}
