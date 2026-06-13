import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, MessageCircle, Users, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import rt from "@/assets/service-rt.jpg";
import coaching from "@/assets/service-coaching.jpg";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — Trotsvast" },
      { name: "description", content: "Remedial teaching, kindercoaching en oudergesprekken — persoonlijke begeleiding op maat door Trotsvast." },
      { property: "og:title", content: "Diensten — Trotsvast" },
      { property: "og:description", content: "Remedial teaching en coaching voor kinderen en jongeren." },
      { property: "og:url", content: "/diensten" },
    ],
    links: [{ rel: "canonical", href: "/diensten" }],
  }),
  component: Diensten,
});

const services = [
  {
    icon: BookOpen,
    title: "Remedial Teaching",
    img: rt,
    text: "Specialistische hulp bij lezen, spelling, rekenen en begrijpend lezen. We sluiten aan bij de leerstof van school en werken in kleine, behapbare stappen.",
    points: ["Diagnostisch startgesprek", "Persoonlijk handelingsplan", "Korte lijntjes met school"],
  },
  {
    icon: MessageCircle,
    title: "Kindercoaching",
    img: coaching,
    text: "Voor kinderen en jongeren die vastlopen op school of in zichzelf. Samen ontdekken we wat helpt — bij faalangst, piekeren, of het vinden van rust en richting.",
    points: ["Speelse, kindgerichte werkvormen", "Werken aan zelfvertrouwen", "Eigen tools voor thuis"],
  },
  {
    icon: Users,
    title: "Ouder- & schoolgesprek",
    img: null,
    text: "Opvoeden doe je niet alleen. We denken graag mee met ouders en leerkrachten, zodat de begeleiding ook buiten de sessies doorwerkt.",
    points: ["Tussentijdse evaluaties", "Tips voor thuis", "Afstemming met school"],
  },
];

function Diensten() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24">
        <span className="text-xs uppercase tracking-widest text-secondary">Diensten</span>
        <h1 className="mt-3 max-w-3xl text-4xl text-primary md:text-5xl">
          Begeleiding die past bij wat jouw kind nodig heeft.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Geen standaardprogramma, wel een doordachte aanpak. Hieronder vind je
          de drie pijlers waar Trotsvast op rust.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-20">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-6 md:grid-cols-[1.1fr_1fr] md:p-8"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-accent text-secondary">
                <s.icon size={20} />
              </div>
              <h2 className="mt-4 text-2xl text-primary md:text-3xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            {s.img ? (
              <img
                src={s.img}
                alt={s.title}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-[var(--gradient-warm)] text-center">
                <div className="max-w-xs px-6">
                  <div className="font-display text-3xl text-primary">Samen sterk</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ouders, school en kind — afstemming zorgt voor de mooiste groei.
                  </p>
                </div>
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
          <h3 className="font-display text-2xl md:text-3xl">Niet zeker welk traject past?</h3>
          <p className="mt-3 max-w-xl text-primary-foreground/80">
            In een vrijblijvend kennismakingsgesprek kijken we samen wat past bij
            jouw kind en jullie gezin.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:-translate-y-0.5 transition-transform"
          >
            Plan kennismaking <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
