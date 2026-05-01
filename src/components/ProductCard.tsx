import { Clock, Plus, Minus } from "lucide-react";
import type { Product } from "@/data/catalog";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";

export const ProductCard = ({ product }: { product: Product }) => {
  const { items, add, remove } = useCart();
  const inCart = items.find((i) => i.id === product.id);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {discount > 0 && (
          <span className="absolute left-2 top-2 z-10 rounded-md bg-bolt-gradient px-2 py-0.5 text-[10px] font-bold text-ink shadow-bolt">
            {discount}% OFF
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          width={512}
          height={512}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <div className="mb-1.5 inline-flex w-fit items-center gap-1 rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
          <Clock className="h-2.5 w-2.5" />
          {product.eta}
        </div>
        <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-ink">
          {product.name}
        </h3>
        <p className="mb-3 mt-0.5 text-xs text-muted-foreground">{product.unit}</p>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="leading-tight">
            <div className="font-display text-base font-extrabold text-ink">₹{product.price}</div>
            {discount > 0 && (
              <div className="text-[11px] text-muted-foreground line-through">₹{product.mrp}</div>
            )}
          </div>

          {inCart ? (
            <div className="flex items-center gap-1 rounded-lg bg-ink p-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => remove(product.id)}
                className="h-7 w-7 rounded-md text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              >
                <Minus className="h-3.5 w-3.5" />
              </Button>
              <span className="min-w-[18px] text-center text-sm font-bold text-ink-foreground">
                {inCart.qty}
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => add(product)}
                className="h-7 w-7 rounded-md bg-primary text-primary-foreground hover:bg-primary-glow hover:text-primary-foreground"
              >
                <Plus className="h-3.5 w-3.5" />
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => add(product)}
              className="h-9 rounded-lg border-2 border-primary bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary-glow"
            >
              ADD
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
