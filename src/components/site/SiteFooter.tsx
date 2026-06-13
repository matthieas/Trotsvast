import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";
import { StickFigure } from "./StickFigure";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <StickFigure className="h-12 w-9 text-lime" pose="jump" />
            <span className="font-display text-3xl text-lime">Trotsvast</span>
          </div>
          <p className="mt-3 max-w-xs font-hand text-base text-primary-foreground/80">
            Coaching & remedial teaching voor een rotsvast zelfvertrouwen.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Navigatie</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-lime">Home</Link></li>
            <li><Link to="/diensten" className="hover:text-lime">Diensten</Link></li>
            <li><Link to="/aanpak" className="hover:text-lime">Aanpak</Link></li>
            <li><Link to="/contact" className="hover:text-lime">Over & Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="mailto:info@trotsvast.nl" className="inline-flex items-center gap-2 hover:text-lime">
                <Mail size={14} /> info@trotsvast.nl
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/brugclub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-lime"
              >
                <Instagram size={14} /> @brugclub
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-primary-foreground/80">
              <MapPin size={14} /> 's-Hertogenbosch
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Trotsvast. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
