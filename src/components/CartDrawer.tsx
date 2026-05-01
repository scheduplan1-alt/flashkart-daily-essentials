import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart, cartTotals } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, Zap } from "lucide-react";
import { toast } from "sonner";

export const CartDrawer = () => {
  const { items, isOpen, setOpen, add, remove, clear } = useCart();
  const { count, subtotal, savings } = cartTotals(items);
  const deliveryFee = subtotal > 0 && subtotal < 199 ? 25 : 0;
  const total = subtotal + deliveryFee;

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 border-l border-border bg-background p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
            <ShoppingBag className="h-5 w-5" /> Your bag
            {count > 0 && (
              <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 grid h-20 w-20 place-items-center rounded-full bg-secondary">
              <ShoppingBag className="h-9 w-9 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">Your bag is empty</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Add some essentials to get started
            </p>
            <Button onClick={() => setOpen(false)} className="mt-6 rounded-xl bg-ink text-ink-foreground hover:bg-ink/90">
              Start shopping
            </Button>
          </div>
        ) : (
          <>
            {savings > 0 && (
              <div className="mx-5 mt-4 flex items-center gap-2 rounded-xl bg-primary/15 px-3 py-2 text-xs font-semibold text-ink">
                <Zap className="h-4 w-4 fill-primary text-primary" />
                You're saving ₹{savings} on this order!
              </div>
            )}

            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 rounded-xl border border-border bg-card p-2.5">
                  <img src={i.image} alt={i.name} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="text-sm font-semibold leading-tight text-ink">{i.name}</div>
                    <div className="text-xs text-muted-foreground">{i.unit}</div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="font-display text-sm font-bold text-ink">
                        ₹{i.price * i.qty}
                      </div>
                      <div className="flex items-center gap-1 rounded-lg bg-ink p-0.5">
                        <Button size="icon" variant="ghost" onClick={() => remove(i.id)}
                          className="h-6 w-6 rounded text-ink-foreground hover:bg-white/10 hover:text-ink-foreground">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="min-w-[18px] text-center text-xs font-bold text-ink-foreground">{i.qty}</span>
                        <Button size="icon" variant="ghost" onClick={() => add(i)}
                          className="h-6 w-6 rounded bg-primary text-primary-foreground hover:bg-primary-glow hover:text-primary-foreground">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border bg-secondary/50 px-5 py-4">
              <div className="space-y-1.5 text-sm">
                <Row label="Subtotal" value={`₹${subtotal}`} />
                <Row label="Delivery fee" value={deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`} accent={deliveryFee === 0} />
                <div className="my-2 h-px bg-border" />
                <Row label="Grand total" value={`₹${total}`} bold />
              </div>
              <Button
                onClick={() => {
                  toast.success("Order placed! Arriving in 10 mins ⚡", { description: `Total ₹${total}` });
                  clear();
                  setOpen(false);
                }}
                className="mt-4 h-12 w-full rounded-xl bg-bolt-gradient font-display text-base font-bold text-ink shadow-bolt hover:opacity-95"
              >
                <Zap className="mr-1 h-4 w-4 fill-ink" /> Checkout · ₹{total}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

const Row = ({ label, value, bold, accent }: { label: string; value: string; bold?: boolean; accent?: boolean }) => (
  <div className="flex items-center justify-between">
    <span className={bold ? "font-display font-bold text-ink" : "text-muted-foreground"}>{label}</span>
    <span className={`${bold ? "font-display text-lg font-extrabold text-ink" : ""} ${accent ? "font-semibold text-success" : ""}`}>
      {value}
    </span>
  </div>
);
