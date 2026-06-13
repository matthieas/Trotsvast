import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Instagram, MapPin, Check } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickFigure, Leaf } from "@/components/site/StickFigure";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Over Trotsvast & Contact — 's-Hertogenbosch" },
      { name: "description", content: "Maak kennis met Trotsvast in 's-Hertogenbosch en plan een vrijblijvend kennismakingsgesprek." },
      { property: "og:title", content: "Over & Contact — Trotsvast" },
      { property: "og:description", content: "Coaching & remedial teaching in 's-Hertogenbosch. Neem contact op." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Aanvraag van ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(
      `Naam: ${data.get("name")}\nE-mail: ${data.get("email")}\nTelefoon: ${data.get("phone") ?? "-"}\n\nBericht:\n${data.get("message")}`,
    );
    window.location.href = `mailto:info@trotsvast.nl?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* OVER */}
      <section className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-16 md:grid-cols-[1fr_1.1fr] md:items-center md:pt-24">
        <div>
          <span className="font-hand text-base uppercase tracking-widest text-secondary">Over Trotsvast</span>
          <h1 className="mt-3 font-display text-5xl text-primary md:text-7xl">
            Met hart voor kinderen die net iets extra’s nodig hebben.
          </h1>
          <p className="mt-5 font-hand text-lg text-foreground/80">
            Trotsvast is opgericht vanuit de overtuiging dat ieder kind het verdient
            om met vertrouwen de wereld in te stappen. Met jarenlange ervaring in
            het onderwijs en als coach, bied ik begeleiding waarin warmte,
            structuur en plezier samenkomen.
          </p>
          <ul className="mt-6 space-y-2 font-hand text-base text-foreground/80">
            {[
              "Gediplomeerd remedial teacher & kindercoach",
              "Praktijk in 's-Hertogenbosch — ook online sessies mogelijk",
              "Persoonlijk, professioneel, altijd op maat",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <Check size={18} className="mt-1 text-secondary" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[var(--gradient-forest)]" />
          <div className="rounded-[1.75rem] border-4 border-dashed border-secondary/40 bg-card p-10">
            <StickFigure className="mx-auto h-72 w-56 text-primary" pose="wave" />
            <p className="mt-4 text-center font-display text-3xl text-secondary">Leuk je te leren kennen!</p>
            <p className="mt-1 text-center font-hand text-base text-foreground/70">
              Stuur gerust een berichtje — koffie staat klaar.
            </p>
          </div>
          <Leaf className="absolute -right-3 -top-3 h-14 w-14 text-secondary" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-[1fr_1.2fr] md:p-10">
          <div>
            <h2 className="font-display text-4xl text-primary md:text-5xl">Even kennismaken?</h2>
            <p className="mt-3 font-hand text-base text-foreground/80">
              Stuur gerust een berichtje. Binnen 2 werkdagen krijg je een
              persoonlijk antwoord.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground">
                  <Mail size={16} />
                </span>
                <a href="mailto:info@trotsvast.nl" className="font-hand text-base hover:text-primary">info@trotsvast.nl</a>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground">
                  <Instagram size={16} />
                </span>
                <a href="https://www.instagram.com/brugclub" target="_blank" rel="noreferrer" className="font-hand text-base hover:text-primary">
                  @brugclub
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground">
                  <MapPin size={16} />
                </span>
                <span className="font-hand text-base">'s-Hertogenbosch · praktijk & online</span>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="font-hand text-sm text-foreground/70">Naam</span>
                <input required name="name" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-secondary" />
              </label>
              <label className="block">
                <span className="font-hand text-sm text-foreground/70">E-mail</span>
                <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-secondary" />
              </label>
            </div>
            <label className="block">
              <span className="font-hand text-sm text-foreground/70">Telefoon (optioneel)</span>
              <input name="phone" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-secondary" />
            </label>
            <label className="block">
              <span className="font-hand text-sm text-foreground/70">Bericht</span>
              <textarea required name="message" rows={5} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-secondary" />
            </label>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-hand text-base text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Verstuur bericht
            </button>
            {sent && (
              <p className="font-hand text-sm text-secondary">Je mailprogramma is geopend — bedankt!</p>
            )}
            <p className="font-hand text-xs text-muted-foreground">
              Liever direct mailen? <Link to="/" className="text-secondary underline">Terug naar home</Link> of mail naar info@trotsvast.nl.
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
