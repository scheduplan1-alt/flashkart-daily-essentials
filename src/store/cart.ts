import { create } from "zustand";
import type { Product } from "@/data/catalog";

type CartItem = Product & { qty: number };

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  add: (p: Product) => void;
  remove: (id: string) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  add: (p) =>
    set((s) => {
      const existing = s.items.find((i) => i.id === p.id);
      if (existing) {
        return {
          items: s.items.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i)),
        };
      }
      return { items: [...s.items, { ...p, qty: 1 }] };
    }),
  remove: (id) =>
    set((s) => {
      const existing = s.items.find((i) => i.id === id);
      if (!existing) return s;
      if (existing.qty <= 1) return { items: s.items.filter((i) => i.id !== id) };
      return { items: s.items.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)) };
    }),
  clear: () => set({ items: [] }),
  setOpen: (isOpen) => set({ isOpen }),
}));

export const cartTotals = (items: CartItem[]) => {
  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const mrpTotal = items.reduce((s, i) => s + i.mrp * i.qty, 0);
  return { count, subtotal, savings: mrpTotal - subtotal };
};
