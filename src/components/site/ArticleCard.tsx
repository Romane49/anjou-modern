import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/site-data";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link to="/actualites/$slug" params={{ slug: article.slug }} className="card-surface group block bg-cream">
      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          width={1024}
          height={640}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{article.dateLabel}</p>
        <h3 className="mt-3 font-display text-lg font-medium tracking-tight text-balance">{article.title}</h3>
      </div>
    </Link>
  );
}
