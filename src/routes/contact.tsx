import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { company, products } from "@/lib/site-data";

const title = "Contact & devis — Anjou Confort";
const description =
  "Contactez Anjou Confort à Saint-Martin-du-Fouilloux pour un devis gratuit : stores, pergolas, portails, portes de garage et menuiseries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Devis gratuit et visite à domicile sans engagement. Nous vous répondons sous 48 h ouvrées."
      />
      <section className="container-site grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Showroom</p>
              <p className="mt-3 text-base">
                {company.address}
                <br />
                {company.city}
              </p>
            </div>
            <div>
              <p className="eyebrow">Téléphone</p>
              <a href={company.phoneHref} className="mt-3 block font-display text-2xl font-semibold tracking-tight">
                {company.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow">Horaires</p>
              <ul className="mt-3 space-y-1 text-sm text-foreground/70">
                {company.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-foreground/5">
            <iframe
              title="Plan d'accès Anjou Confort"
              src="https://www.google.com/maps?q=29+rue+des+Tilleuls,+49170+Saint-Martin-du-Fouilloux&output=embed"
              className="aspect-[4/3] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          {sent ? (
            <div className="card-surface p-10 text-center">
              <p className="eyebrow">Merci</p>
              <h2 className="mt-3 text-2xl font-semibold">Votre demande a bien été envoyée</h2>
              <p className="mt-3 text-sm text-foreground/70">Un conseiller vous recontactera sous 48 h ouvrées.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card-surface grid grid-cols-1 gap-5 p-8 sm:grid-cols-2">
              <div>
                <label htmlFor="nom" className="text-sm font-medium">
                  Nom
                </label>
                <input id="nom" name="nom" required className="field mt-2" />
              </div>
              <div>
                <label htmlFor="prenom" className="text-sm font-medium">
                  Prénom
                </label>
                <input id="prenom" name="prenom" required className="field mt-2" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input id="email" name="email" type="email" required className="field mt-2" />
              </div>
              <div>
                <label htmlFor="tel" className="text-sm font-medium">
                  Téléphone
                </label>
                <input id="tel" name="tel" type="tel" className="field mt-2" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="produit" className="text-sm font-medium">
                  Votre projet
                </label>
                <select id="produit" name="produit" className="field mt-2">
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                  <option value="autre">Autre / SAV</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required className="field mt-2 resize-y" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Envoyer ma demande
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
