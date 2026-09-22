import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/produits/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Produit introuvable — Anjou Confort" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.product.name} — Anjou Confort`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.product.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.product.intro },
      ],
    };
  },
  component: ProduitPage,
});

function ProduitPage() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="bg-cream">
        <div className="container-site grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 sm:py-20">
          <div>
            <Link to="/produits" className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              ← Catalogue
            </Link>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance">{product.name}</h1>
            <p className="mt-5 max-w-lg text-base text-foreground/70 text-pretty">{product.intro}</p>
            <Link to="/contact" className="btn-primary mt-8">
              Demander un devis
            </Link>
          </div>
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={768}
            className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-foreground/5"
          />
        </div>
      </section>

      <section className="container-site grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Notre gamme</p>
          <ul className="mt-6 space-y-4">
            {product.features.map((f) => (
              <li key={f} className="flex gap-4 border-b pb-4 text-base">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Options</p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {product.options.map((o) => (
              <li key={o} className="rounded-lg bg-cream px-5 py-4 text-sm ring-1 ring-foreground/5">
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-site py-16 sm:py-20">
          <h2 className="text-2xl font-semibold text-balance">Découvrez aussi</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
