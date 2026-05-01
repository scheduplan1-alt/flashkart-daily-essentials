import fruits from "@/assets/cat-fruits.jpg";
import vegetables from "@/assets/cat-vegetables.jpg";
import dairy from "@/assets/cat-dairy.jpg";
import snacks from "@/assets/cat-snacks.jpg";
import beverages from "@/assets/cat-beverages.jpg";
import household from "@/assets/cat-household.jpg";
import personal from "@/assets/cat-personal.jpg";
import bakery from "@/assets/cat-bakery.jpg";

export type Category = {
  id: string;
  name: string;
  image: string;
  tint: string;
};

export const categories: Category[] = [
  { id: "fruits", name: "Fresh Fruits", image: fruits, tint: "bg-orange-100" },
  { id: "vegetables", name: "Vegetables", image: vegetables, tint: "bg-green-100" },
  { id: "dairy", name: "Dairy & Eggs", image: dairy, tint: "bg-yellow-100" },
  { id: "snacks", name: "Snacks", image: snacks, tint: "bg-amber-100" },
  { id: "beverages", name: "Beverages", image: beverages, tint: "bg-blue-100" },
  { id: "household", name: "Household", image: household, tint: "bg-pink-100" },
  { id: "personal", name: "Personal Care", image: personal, tint: "bg-purple-100" },
  { id: "bakery", name: "Bakery", image: bakery, tint: "bg-rose-100" },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  unit: string;
  image: string;
  eta: string;
};

export const products: Product[] = [
  { id: "p1", name: "Fresh Bananas", category: "fruits", price: 49, mrp: 65, unit: "1 dozen", image: fruits, eta: "8 mins" },
  { id: "p2", name: "Royal Gala Apples", category: "fruits", price: 189, mrp: 220, unit: "1 kg", image: fruits, eta: "10 mins" },
  { id: "p3", name: "Strawberries", category: "fruits", price: 129, mrp: 160, unit: "200 g", image: fruits, eta: "12 mins" },
  { id: "p4", name: "Hybrid Tomatoes", category: "vegetables", price: 39, mrp: 55, unit: "500 g", image: vegetables, eta: "9 mins" },
  { id: "p5", name: "Organic Carrots", category: "vegetables", price: 59, mrp: 75, unit: "500 g", image: vegetables, eta: "10 mins" },
  { id: "p6", name: "Broccoli Crowns", category: "vegetables", price: 89, mrp: 110, unit: "1 pc", image: vegetables, eta: "10 mins" },
  { id: "p7", name: "Amul Toned Milk", category: "dairy", price: 32, mrp: 34, unit: "500 ml", image: dairy, eta: "7 mins" },
  { id: "p8", name: "Cheddar Cheese Block", category: "dairy", price: 215, mrp: 260, unit: "200 g", image: dairy, eta: "10 mins" },
  { id: "p9", name: "Greek Yogurt", category: "dairy", price: 79, mrp: 95, unit: "400 g", image: dairy, eta: "8 mins" },
  { id: "p10", name: "Choco Chip Cookies", category: "snacks", price: 99, mrp: 120, unit: "150 g", image: snacks, eta: "10 mins" },
  { id: "p11", name: "Salted Potato Chips", category: "snacks", price: 20, mrp: 25, unit: "55 g", image: snacks, eta: "9 mins" },
  { id: "p12", name: "Dark Chocolate 70%", category: "snacks", price: 149, mrp: 180, unit: "100 g", image: snacks, eta: "10 mins" },
  { id: "p13", name: "Cold Pressed Orange Juice", category: "beverages", price: 119, mrp: 140, unit: "750 ml", image: beverages, eta: "10 mins" },
  { id: "p14", name: "Sparkling Water", category: "beverages", price: 65, mrp: 75, unit: "500 ml", image: beverages, eta: "9 mins" },
  { id: "p15", name: "Cola Can Pack", category: "beverages", price: 199, mrp: 240, unit: "6 x 300 ml", image: beverages, eta: "11 mins" },
  { id: "p16", name: "Floor Cleaner", category: "household", price: 175, mrp: 210, unit: "1 L", image: household, eta: "12 mins" },
  { id: "p17", name: "Dishwash Liquid", category: "household", price: 129, mrp: 155, unit: "750 ml", image: household, eta: "10 mins" },
  { id: "p18", name: "Shampoo & Conditioner", category: "personal", price: 349, mrp: 420, unit: "340 ml", image: personal, eta: "12 mins" },
  { id: "p19", name: "Luxury Soap Bar", category: "personal", price: 75, mrp: 90, unit: "100 g", image: personal, eta: "9 mins" },
  { id: "p20", name: "Sourdough Loaf", category: "bakery", price: 145, mrp: 170, unit: "400 g", image: bakery, eta: "10 mins" },
  { id: "p21", name: "Butter Croissant", category: "bakery", price: 65, mrp: 80, unit: "1 pc", image: bakery, eta: "10 mins" },
  { id: "p22", name: "Blueberry Muffins", category: "bakery", price: 199, mrp: 240, unit: "4 pc", image: bakery, eta: "12 mins" },
];
