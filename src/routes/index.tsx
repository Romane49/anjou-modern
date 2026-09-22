import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { products, articles } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";
import { ArticleCard } from "@/components/site/ArticleCard";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";

const title = "Anjou Confort — Stores, pergolas, portails et menuiseries près d'Angers";
const description =
  "Anjou Confort conçoit et pose stores, pergolas, vérandas, carports, portails, portes de garage et menuiseries sur mesure depuis 1995 à Saint-Martin-du-Fouilloux (49).";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Terrasse sous une pergola aluminium au soleil couchant"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-site w-full pb-16">
            <div className="max-w-xl rounded-2xl bg-background/55 p-8 ring-1 ring-on-image/40 backdrop-blur-xl sm:p-10">
              <p className="eyebrow">Depuis 1995 · Saint-Martin-du-Fouilloux</p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl text-balance">
                Votre confort extérieur, sur mesure depuis 1995
              </h1>
              <p className="mt-4 max-w-md text-base text-foreground/70 text-pretty">
                Stores, pergolas et menuiseries fabriqués en atelier, posés par des artisans de la famille. Un
                savoir-faire de charpentier transmis depuis 1830.
              </p>
              <Link to="/produits" className="btn-primary mt-7">
                Voir le catalogue produits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-cream">
        <div className="container-site py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Nos univers</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-balance">
              Huit savoir-faire, un seul interlocuteur
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-background">
        <div className="container-site py-20 sm:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">À propos</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-balance">
                Une famille de charpentiers, depuis 1830
              </h2>
              <p className="mt-5 max-w-md text-base text-foreground/70 text-pretty">
                Fondée en 1995 par Stéphane Ménis, Anjou Confort perpétue un savoir-faire de charron-charpentier.
                Chaque projet est pensé, fabriqué et posé par nos équipes, dans notre hall d'exposition de
                Saint-Martin-du-Fouilloux.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["RGE", "Certifié Reconnu Garant de l'Environnement."],
                ["Storistes de France", "Adhérent du réseau professionnel."],
                ["4.8/5", "Note moyenne sur 404 avis clients."],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-cream p-6 ring-1 ring-foreground/5">
                  <p className="font-display text-2xl font-semibold tracking-tight">{k}</p>
                  <p className="mt-2 text-sm text-foreground/60 text-pretty">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* NEWS */}
      <section className="bg-background">
        <div className="container-site py-20 sm:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Actualités</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-balance">Dernières actualités</h2>
            </div>
            <Link to="/actualites" className="hidden text-sm font-semibold hover:text-primary sm:inline-flex">
              Tout voir
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
