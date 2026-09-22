import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import logoFull from "@/assets/logo-full.png";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground/80">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-ink-foreground">
              Anjou <span className="text-primary">Confort</span>
            </p>
            <p className="mt-4 text-sm text-ink-foreground/60 text-pretty">
              Installateur de confort extérieur depuis 1995, à Saint-Martin-du-Fouilloux près d'Angers.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-foreground/40">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{company.address}</li>
              <li>{company.city}</li>
              <li>
                <a href={company.phoneHref} className="hover:text-ink-foreground">
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-foreground/40">Horaires</p>
            <ul className="mt-4 space-y-2 text-sm">
              {company.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-foreground/40">Liens</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/produits" className="hover:text-ink-foreground">
                  Catalogue produits
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="hover:text-ink-foreground">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/suivi-commande" className="hover:text-ink-foreground">
                  Suivi de commande
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink-foreground">
                  Demande de devis
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/40">
          © {new Date().getFullYear()} Anjou Confort — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
