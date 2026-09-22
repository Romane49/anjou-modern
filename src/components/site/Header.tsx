import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/site-data";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/produits", label: "Produits" },
  { to: "/actualites", label: "Actualités" },
  { to: "/suivi-commande", label: "Suivi de commande" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="container-site flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          Anjou <span className="text-primary">Confort</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) =>
            l.to === "/produits" ? (
              <div key={l.to} className="group relative">
                <Link to={l.to} className="nav-link py-5">
                  {l.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="card-surface p-2 shadow-xl">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        to="/produits/$slug"
                        params={{ slug: p.slug }}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-cream"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.to} to={l.to} className="nav-link" activeOptions={{ exact: l.to === "/" }}>
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Demande de devis
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden"
          >
            <span className={`h-px w-5 bg-foreground transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container-site flex flex-col py-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 text-base font-medium">
                {l.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-x-4 border-t pt-4">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to="/produits/$slug"
                  params={{ slug: p.slug }}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-muted-foreground"
                >
                  {p.name}
                </Link>
              ))}
            </div>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
              Demande de devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
