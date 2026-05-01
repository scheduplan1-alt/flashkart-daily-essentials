import { categories } from "@/data/catalog";

type Props = { active: string; onSelect: (id: string) => void };

export const CategoryGrid = ({ active, onSelect }: Props) => {
  return (
    <section className="container mx-auto px-4 py-10 md:py-14">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
            Shop by category
          </h2>
          <p className="text-sm text-muted-foreground">Pick a section to start filling your bag</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {categories.map((c, i) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              style={{ animationDelay: `${i * 40}ms` }}
              className={`animate-slide-up group flex flex-col items-center rounded-2xl border-2 p-3 text-center transition-all duration-300 ${
                isActive
                  ? "border-primary bg-primary/10 shadow-bolt"
                  : "border-transparent bg-card shadow-card hover:-translate-y-1 hover:border-primary/40"
              }`}
            >
              <div
                className={`mb-2 grid aspect-square w-full place-items-center overflow-hidden rounded-xl ${c.tint}`}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-xs font-semibold text-ink md:text-sm">{c.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
