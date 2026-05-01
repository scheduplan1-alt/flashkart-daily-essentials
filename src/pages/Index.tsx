import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { categories, products } from "@/data/catalog";
import { Truck, ShieldCheck, Tags } from "lucide-react";

const Index = () => {
  const [active, setActive] = useState<string>("fruits");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q) {
      return products.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q),
      );
    }
    return products.filter((p) => p.category === active);
  }, [active, query]);

  const activeName = query.trim()
    ? `Search results for "${query}"`
    : categories.find((c) => c.id === active)?.name ?? "";

  return (
    <div className="min-h-screen bg-background">
      <Header query={query} onQueryChange={setQuery} />
      <main>
        <Hero />

        {/* Trust strip */}
        <section className="border-b border-border bg-card">
          <div className="container mx-auto grid grid-cols-3 divide-x divide-border px-4">
            {[
              { icon: Truck, label: "10-min delivery", sub: "in your city" },
              { icon: Tags, label: "Lowest prices", sub: "guaranteed" },
              { icon: ShieldCheck, label: "100% genuine", sub: "products" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center justify-center gap-2.5 py-4 text-center">
                <Icon className="h-5 w-5 text-primary shrink-0" />
                <div className="leading-tight">
                  <div className="text-xs font-bold text-ink md:text-sm">{label}</div>
                  <div className="hidden text-[11px] text-muted-foreground md:block">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CategoryGrid active={active} onSelect={(id) => { setActive(id); setQuery(""); }} />

        <section className="container mx-auto px-4 pb-12">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
              {activeName}
            </h2>
            <span className="text-xs text-muted-foreground md:text-sm">
              {filtered.length} products · 10 min delivery
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <div className="font-display text-lg font-bold text-ink">No products found</div>
              <p className="mt-1 text-sm text-muted-foreground">Try another keyword or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
              {filtered.map((p, i) => (
                <div key={p.id} className="animate-slide-up" style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
