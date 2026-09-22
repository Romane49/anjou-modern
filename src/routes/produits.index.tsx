import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Catalogue produits — Anjou Confort";
const description =
  "Stores, pergolas et vérandas, carports solaires, menuiseries, fermetures, portes d'entrée, portes de garage et portails : découvrez tous les produits Anjou Confort.";

export const Route = createFileRoute("/produits/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProduitsPage,
});

function ProduitsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Nos produits"
        description="Huit univers pour aménager, protéger et embellir votre habitat. Chaque produit est étudié sur mesure et posé par nos équipes."
      />
      <section className="container-site py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-16 rounded-2xl bg-cream p-8 sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-balance">Un projet en tête ?</h2>
            <p className="mt-2 max-w-md text-sm text-foreground/70">
              Nos conseillers se déplacent gratuitement pour étudier votre projet et vous remettre un devis détaillé.
            </p>
          </div>
          <Link to="/contact" className="btn-primary mt-6 lg:mt-0">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
