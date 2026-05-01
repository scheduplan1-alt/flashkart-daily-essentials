import { Zap } from "lucide-react";

export const Footer = () => (
  <footer className="mt-16 border-t border-border bg-ink text-ink-foreground">
    <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint-gradient shadow-mint">
            <Zap className="h-5 w-5 fill-white text-white" />
          </span>
          <span className="font-display text-xl font-extrabold">
            Flash<span className="text-primary">kart</span>
          </span>
        </div>
        <p className="mt-3 text-sm text-ink-foreground/60">
          Daily groceries & essentials at your door in 10 minutes. Built for India.
        </p>
      </div>
      {[
        { title: "Shop", links: ["Fruits", "Vegetables", "Dairy", "Bakery"] },
        { title: "Company", links: ["About", "Careers", "Press", "Partners"] },
        { title: "Help", links: ["Contact", "FAQs", "Returns", "Terms"] },
      ].map((g) => (
        <div key={g.title}>
          <div className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-primary">
            {g.title}
          </div>
          <ul className="space-y-2 text-sm text-ink-foreground/70">
            {g.links.map((l) => (
              <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-ink-foreground/50">
      © {new Date().getFullYear()} Flashkart. All rights reserved. Designed & Devloped By Sushant Markad.
    </div>
  </footer>
);
