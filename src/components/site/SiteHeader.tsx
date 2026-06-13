import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/trotsvast-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/aanpak", label: "Aanpak" },
  { to: "/contact", label: "Over & Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo.url}
            alt="Trotsvast — coaching & remedial teaching"
            width={160}
            height={56}
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-hand text-[17px] text-foreground/75 transition-colors hover:text-secondary"
              activeProps={{ className: "text-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-secondary px-5 py-2 font-hand text-base text-secondary-foreground shadow-[var(--shadow-leaf)] transition-transform hover:-translate-y-0.5"
          >
            Plan kennismaking
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-hand text-lg text-foreground/80"
                activeProps={{ className: "text-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
