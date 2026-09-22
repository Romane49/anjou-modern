import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { company } from "@/lib/site-data";

const title = "Suivi de commande — Anjou Confort";
const description = "Suivez l'avancement de votre commande Anjou Confort grâce à votre numéro de dossier.";

export const Route = createFileRoute("/suivi-commande")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SuiviPage,
});

const steps = ["Commande validée", "Fabrication en cours", "Prête à poser", "Pose planifiée", "Terminée"];

function SuiviPage() {
  const [submitted, setSubmitted] = useState<{ ref: string; step: number } | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const ref = String(data.get("ref") ?? "").trim().toUpperCase();
    // Démonstration : l'étape est dérivée de la référence en attendant le raccordement au suivi réel.
    const step = ref ? (ref.split("").reduce((s, c) => s + c.charCodeAt(0), 0) % 4) + 1 : 1;
    setSubmitted({ ref, step });
  };

  return (
    <>
      <PageHeader
        eyebrow="Espace client"
        title="Suivi de commande"
        description="Renseignez votre numéro de dossier et votre code postal pour connaître l'avancement de votre projet."
      />
      <section className="container-site grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-5">
        <form onSubmit={onSubmit} className="card-surface space-y-5 p-8 lg:col-span-2">
          <div>
            <label htmlFor="ref" className="text-sm font-medium">
              Numéro de dossier
            </label>
            <input id="ref" name="ref" required placeholder="Ex. AC-2026-0148" className="field mt-2" />
          </div>
          <div>
            <label htmlFor="cp" className="text-sm font-medium">
              Code postal du chantier
            </label>
            <input id="cp" name="cp" required inputMode="numeric" placeholder="49170" className="field mt-2" />
          </div>
          <button type="submit" className="btn-primary w-full">
            Consulter l'avancement
          </button>
          <p className="text-xs text-muted-foreground">
            Votre numéro de dossier figure sur votre devis signé et votre confirmation de commande.
          </p>
        </form>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="card-surface p-8">
              <p className="eyebrow">Dossier {submitted.ref}</p>
              <h2 className="mt-3 text-2xl font-semibold">{steps[submitted.step]}</h2>
              <ol className="mt-8 space-y-0">
                {steps.map((s, i) => {
                  const done = i <= submitted.step;
                  return (
                    <li key={s} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span
                          className={`size-3 rounded-full ring-4 ring-background ${done ? "bg-primary" : "bg-foreground/15"}`}
                        />
                        {i < steps.length - 1 && (
                          <span className={`w-px flex-1 ${i < submitted.step ? "bg-primary" : "bg-foreground/10"}`} />
                        )}
                      </div>
                      <p className={`pb-8 text-sm ${done ? "font-medium" : "text-muted-foreground"}`}>{s}</p>
                    </li>
                  );
                })}
              </ol>
              <p className="rounded-lg bg-cream p-4 text-xs text-muted-foreground">
                Une question sur votre dossier ? Appelez-nous au{" "}
                <a href={company.phoneHref} className="font-medium text-foreground">
                  {company.phone}
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-cream p-8">
              <h2 className="text-xl font-semibold">Les étapes de votre projet</h2>
              <ol className="mt-6 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-4 text-sm">
                    <span className="grid size-8 place-items-center rounded-full bg-background font-display text-xs font-semibold ring-1 ring-foreground/10">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
