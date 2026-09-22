import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/lib/site-data";
import { ArticleCard } from "@/components/site/ArticleCard";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Actualités & blog — Anjou Confort";
const description =
  "Nouveautés produits, conseils d'aménagement et vie de l'entreprise : suivez l'actualité d'Anjou Confort.";

export const Route = createFileRoute("/actualites/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ActualitesPage,
});

function ActualitesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Actualités"
        description="Nouveautés, conseils et coulisses de l'atelier."
      />
      <section className="container-site py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
