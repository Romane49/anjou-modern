import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticle } from "@/lib/site-data";

export const Route = createFileRoute("/actualites/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article introuvable — Anjou Confort" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.article.title} — Anjou Confort`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.article.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.article.excerpt },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <article>
      <div className="bg-cream">
        <div className="container-site py-16 sm:py-20">
          <Link to="/actualites" className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            ← Actualités
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/50">{article.dateLabel}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance">{article.title}</h1>
        </div>
      </div>
      <div className="container-site py-12">
        <img
          src={article.image}
          alt={article.title}
          width={1024}
          height={640}
          className="aspect-[16/8] w-full rounded-2xl object-cover ring-1 ring-foreground/5"
        />
        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-foreground/80">
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
