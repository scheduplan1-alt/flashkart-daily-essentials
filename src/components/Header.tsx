import { Search, MapPin, ShoppingCart, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart, cartTotals } from "@/store/cart";

type Props = { query: string; onQueryChange: (v: string) => void };

export const Header = ({ query, onQueryChange }: Props) => {
  const { items, setOpen } = useCart();
  const { count } = cartTotals(items);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center gap-3 px-4 md:h-20 md:gap-6">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint-gradient shadow-mint md:h-10 md:w-10">
            <Zap className="h-5 w-5 fill-white text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
            Flash<span className="text-primary">kart</span>
          </span>
        </a>

        <div className="hidden items-center gap-1.5 rounded-xl bg-secondary px-3 py-2 text-sm md:flex">
          <MapPin className="h-4 w-4 text-accent" />
          <div className="leading-tight">
            <div className="text-xs font-semibold text-ink">Delivery in 10 min</div>
            <div className="text-[11px] text-muted-foreground">Sector 18, Noida</div>
          </div>
        </div>

        <div className="relative ml-auto flex-1 max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder='Search "milk", "bread", "chips"...'
            className="h-11 rounded-xl border-border bg-secondary pl-11 text-sm focus-visible:ring-primary"
          />
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="relative h-11 gap-2 rounded-xl bg-ink px-3 text-ink-foreground hover:bg-ink/90 md:px-5"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden md:inline">My Cart</span>
          {count > 0 && (
            <span className="grid h-5 min-w-[20px] place-items-center rounded-full bg-accent px-1 text-[11px] font-bold text-accent-foreground">
              {count}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};
