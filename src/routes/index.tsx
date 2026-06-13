import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sparkles, BookOpen, Compass, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickFigure, Squiggle, Leaf } from "@/components/site/StickFigure";
import hero from "@/assets/hero-forest.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trotsvast — Coaching & Remedial Teaching in 's-Hertogenbosch" },
      { name: "description", content: "Trotsvast biedt coaching en remedial teaching voor kinderen en jongeren in 's-Hertogenbosch. Voor een rotsvast zelfvertrouwen." },
      { property: "og:title", content: "Trotsvast — Coaching & Remedial Teaching" },
      { property: "og:description", content: "Voor een rotsvast zelfvertrouwen. Coaching & remedial teaching in 's-Hertogenbosch." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        {/* doodle accents */}
        <Leaf className="absolute left-4 top-10 h-10 w-10 rotate-[-20deg] text-secondary/70 md:left-12 md:top-14 md:h-14 md:w-14" />
        <Leaf className="absolute right-6 top-24 h-8 w-8 rotate-[35deg] text-primary/60 md:right-16 md:h-12 md:w-12" />

        <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-14 pb-20 md:grid-cols-[1.1fr_1fr] md:items-center md:pt-24 md:pb-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-background/80 px-3 py-1 font-hand text-sm text-primary backdrop-blur">
              <Sparkles size={14} className="text-secondary" />
              Coaching & Remedial Teaching · 's-Hertogenbosch
            </span>
            <h1 className="mt-5 font-display text-5xl text-primary md:text-7xl">
              Voor een <span className="relative inline-block text-secondary">rotsvast
                <Squiggle className="absolute -bottom-3 left-0 h-3 w-full text-lime" />
              </span><br />
              zelfvertrouwen!
            </h1>
            <p className="mt-6 max-w-lg font-hand text-lg text-foreground/80 md:text-xl">
              Trotsvast begeleidt kinderen en jongeren die net dat steuntje in de
              rug nodig hebben — bij leren, leven en alles wat daar tussenin zit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-hand text-base text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Plan een kennismaking <ArrowRight size={16} />
              </Link>
              <Link
                to="/diensten"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 font-hand text-base text-primary hover:bg-accent"
              >
                Bekijk de diensten
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-secondary/15" />
              <div className="rounded-[1.75rem] border-4 border-dashed border-secondary/40 bg-card/80 p-8 backdrop-blur">
                <StickFigure className="wiggle mx-auto h-56 w-44 text-primary md:h-64 md:w-48" pose="jump" />
                <p className="mt-4 text-center font-display text-2xl text-secondary">Hoi! Ik ben Trotsvast.</p>
                <p className="mt-1 text-center font-hand text-base text-foreground/70">
                  Samen vinden we jouw rotsvaste plek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-4 rounded-3xl bg-[var(--gradient-forest)] p-6 md:grid-cols-3 md:p-8">
          {[
            { icon: Heart, title: "Warm & persoonlijk", text: "Elke begeleiding start bij wie het kind écht is." },
            { icon: BookOpen, title: "Onderwijsexpertise", text: "Remedial teaching op maat — lezen, spelling, rekenen." },
            { icon: Compass, title: "Richting & rust", text: "Coaching die helpt om weer grip en plezier te vinden." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-card/90 p-5 backdrop-blur">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-secondary-foreground">
                <Icon size={20} />
              </div>
              <div className="mt-4 font-display text-2xl text-primary">{title}</div>
              <p className="mt-1 font-hand text-base text-foreground/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="relative mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <StickFigure className="absolute -left-6 top-10 hidden h-24 w-20 text-secondary/40 md:block" pose="wave" />
        <StickFigure className="absolute -right-6 top-20 hidden h-24 w-20 -scale-x-100 text-primary/30 md:block" pose="stand" />
        <h2 className="font-display text-4xl text-primary md:text-6xl">Voor ieder kind een eigen pad</h2>
        <p className="mt-6 font-hand text-lg text-foreground/80">
          Bij Trotsvast geloven we dat leren mag voelen als groeien. We werken
          één-op-één, in een veilige sfeer, en met een aanpak die past bij wat
          jouw kind nodig heeft. Of het nu gaat om extra ondersteuning op school,
          faalangst, of het vinden van zelfvertrouwen — we lopen graag een stukje
          met je mee.
        </p>
        <Link
          to="/aanpak"
          className="mt-8 inline-flex items-center gap-2 font-hand text-base text-secondary hover:underline"
        >
          Ontdek onze aanpak <ArrowRight size={14} />
        </Link>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <figure className="relative rounded-3xl border-2 border-dashed border-secondary/40 bg-card p-8 md:p-12">
          <Leaf className="absolute -left-4 -top-4 h-12 w-12 text-secondary" />
          <blockquote className="font-display text-3xl leading-snug text-primary md:text-4xl">
            “Mijn dochter ging weer met plezier naar school. Trotsvast gaf haar
            niet alleen handvatten om beter te leren, maar vooral het gevoel dat
            ze het kán.”
          </blockquote>
          <figcaption className="mt-5 font-hand text-base text-muted-foreground">
            — Moeder van Lotte (9 jaar)
          </figcaption>
        </figure>
      </section>

      {/* Instagram CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-24">
        <a
          href="https://www.instagram.com/brugclub"
          target="_blank"
          rel="noreferrer"
          className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-primary p-6 text-primary-foreground transition-transform hover:-translate-y-0.5 md:p-8"
        >
          <div>
            <div className="font-display text-3xl text-lime">Volg @brugclub</div>
            <p className="mt-1 font-hand text-base text-primary-foreground/80">
              Voor tips, doe-ideeën en kijkjes achter de schermen.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2 font-hand text-base text-primary">
            <Instagram size={16} /> Naar Instagram
          </span>
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
