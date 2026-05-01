import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { categories, products } from "@/data/catalog";

const Index = () => {
  const [active, setActive] = useState<string>("fruits");

  const filtered = useMemo(() => products.filter((p) => p.category === active), [active]);
  const activeName = categories.find((c) => c.id === active)?.name ?? "";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategoryGrid active={active} onSelect={setActive} />

        <section className="container mx-auto px-4 pb-12">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
              {activeName}
            </h2>
            <span className="text-xs text-muted-foreground md:text-sm">
              {filtered.length} products · delivered in 10 mins
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((p, i) => (
              <div key={p.id} className="animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
