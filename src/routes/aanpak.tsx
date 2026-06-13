import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/aanpak")({
  head: () => ({
    meta: [
      { title: "Aanpak — Zo werkt Trotsvast" },
      { name: "description", content: "Van kennismaking tot afronding: ontdek de werkwijze van Trotsvast en lees ervaringen van ouders en kinderen." },
      { property: "og:title", content: "Aanpak — Trotsvast" },
      { property: "og:description", content: "Persoonlijke werkwijze en praktijkverhalen." },
      { property: "og:url", content: "/aanpak" },
    ],
    links: [{ rel: "canonical", href: "/aanpak" }],
  }),
  component: Aanpak,
});

const steps = [
  { n: "01", title: "Kennismaking", text: "Een gratis gesprek waarin we kennismaken en luisteren naar wat er speelt." },
  { n: "02", title: "Intake & plan", text: "We brengen de hulpvraag in kaart en maken samen een persoonlijk plan met heldere doelen." },
  { n: "03", title: "Sessies op maat", text: "Wekelijkse sessies van 45–60 min, speels of serieus — altijd afgestemd op het kind." },
  { n: "04", title: "Evaluatie & afronding", text: "Regelmatig kijken we wat werkt. Als het kind weer op eigen benen staat, ronden we af." },
];

const cases = [
  {
    name: "Lotte, 9 jaar",
    topic: "Lezen & zelfvertrouwen",
    text: "Na maanden vastlopen op AVI-niveau weer plezier in lezen. Lotte leest nu zelf voor aan haar zusje.",
  },
  {
    name: "Sem, 11 jaar",
    topic: "Faalangst voor toetsen",
    text: "Met ademhalingstools en een vaste voorbereidingsroutine maakte Sem zijn Cito met rust en zelfvertrouwen.",
  },
  {
    name: "Noor, 14 jaar",
    topic: "Plannen & focus",
    text: "Een eigen weekstructuur en een planbord op maat zorgden voor minder stress thuis en betere resultaten.",
  },
];

function Aanpak() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24">
        <span className="text-xs uppercase tracking-widest text-secondary">Onze aanpak</span>
        <h1 className="mt-3 max-w-3xl text-4xl text-primary md:text-5xl">
          Kleine stappen, grote groei.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Elk traject bij Trotsvast volgt vier vertrouwde stappen. Met ruimte
          voor wat zich onderweg aandient.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-3xl border border-border bg-card p-6">
              <div className="font-display text-3xl text-secondary">{s.n}</div>
              <div className="mt-3 font-display text-xl text-primary">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl text-primary md:text-4xl">Praktijkverhalen</h2>
          <span className="text-xs text-muted-foreground">Namen gewijzigd ivm privacy</span>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.name} className="rounded-3xl bg-[var(--gradient-warm)] p-6">
              <div className="text-xs uppercase tracking-wider text-secondary">{c.topic}</div>
              <div className="mt-2 font-display text-xl text-primary">{c.name}</div>
              <p className="mt-3 text-sm text-foreground/80">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
