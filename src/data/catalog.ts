import bananas from "@/assets/p/bananas.jpg";
import apples from "@/assets/p/apples.jpg";
import strawberries from "@/assets/p/strawberries.jpg";
import oranges from "@/assets/p/oranges.jpg";
import grapes from "@/assets/p/grapes.jpg";
import mango from "@/assets/p/mango.jpg";
import pomegranate from "@/assets/p/pomegranate.jpg";
import watermelon from "@/assets/p/watermelon.jpg";
import tomato from "@/assets/p/tomato.jpg";
import carrot from "@/assets/p/carrot.jpg";
import broccoli from "@/assets/p/broccoli.jpg";
import onion from "@/assets/p/onion.jpg";
import potato from "@/assets/p/potato.jpg";
import spinach from "@/assets/p/spinach.jpg";
import cucumber from "@/assets/p/cucumber.jpg";
import peppers from "@/assets/p/peppers.jpg";
import milk from "@/assets/p/milk.jpg";
import cheese from "@/assets/p/cheese.jpg";
import yogurt from "@/assets/p/yogurt.jpg";
import butter from "@/assets/p/butter.jpg";
import eggs from "@/assets/p/eggs.jpg";
import paneer from "@/assets/p/paneer.jpg";
import chips from "@/assets/p/chips.jpg";
import cookies from "@/assets/p/cookies.jpg";
import chocolate from "@/assets/p/chocolate.jpg";
import popcorn from "@/assets/p/popcorn.jpg";
import nuts from "@/assets/p/nuts.jpg";
import namkeen from "@/assets/p/namkeen.jpg";
import juice from "@/assets/p/juice.jpg";
import cola from "@/assets/p/cola.jpg";
import water from "@/assets/p/water.jpg";
import coffee from "@/assets/p/coffee.jpg";
import tea from "@/assets/p/tea.jpg";
import energy from "@/assets/p/energy.jpg";
import detergent from "@/assets/p/detergent.jpg";
import dishwash from "@/assets/p/dishwash.jpg";
import cleaner from "@/assets/p/cleaner.jpg";
import tissue from "@/assets/p/tissue.jpg";
import trash from "@/assets/p/trash.jpg";
import shampoo from "@/assets/p/shampoo.jpg";
import soap from "@/assets/p/soap.jpg";
import toothpaste from "@/assets/p/toothpaste.jpg";
import deo from "@/assets/p/deo.jpg";
import lotion from "@/assets/p/lotion.jpg";
import bread from "@/assets/p/bread.jpg";
import croissant from "@/assets/p/croissant.jpg";
import muffin from "@/assets/p/muffin.jpg";
import buns from "@/assets/p/buns.jpg";
import cake from "@/assets/p/cake.jpg";

export type Category = {
  id: string;
  name: string;
  image: string;
  tint: string;
};

export const categories: Category[] = [
  { id: "fruits",     name: "Fresh Fruits",   image: apples,    tint: "bg-red-50" },
  { id: "vegetables", name: "Vegetables",     image: broccoli,  tint: "bg-emerald-50" },
  { id: "dairy",      name: "Dairy & Eggs",   image: milk,      tint: "bg-amber-50" },
  { id: "snacks",     name: "Snacks",         image: cookies,   tint: "bg-orange-50" },
  { id: "beverages",  name: "Beverages",      image: juice,     tint: "bg-sky-50" },
  { id: "household",  name: "Household",      image: detergent, tint: "bg-blue-50" },
  { id: "personal",   name: "Personal Care",  image: shampoo,   tint: "bg-pink-50" },
  { id: "bakery",     name: "Bakery",         image: croissant, tint: "bg-rose-50" },
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

let _id = 0;
const p = (
  name: string,
  category: string,
  price: number,
  mrp: number,
  unit: string,
  image: string,
  eta = "10 mins",
): Product => ({ id: `p${++_id}`, name, category, price, mrp, unit, image, eta });

export const products: Product[] = [
  // FRUITS (16)
  p("Robusta Bananas", "fruits", 49, 65, "1 dozen", bananas, "8 mins"),
  p("Royal Gala Apples", "fruits", 189, 240, "1 kg", apples),
  p("Premium Strawberries", "fruits", 129, 160, "200 g", strawberries, "12 mins"),
  p("Nagpur Oranges", "fruits", 99, 130, "1 kg", oranges),
  p("Green Seedless Grapes", "fruits", 89, 110, "500 g", grapes),
  p("Alphonso Mangoes", "fruits", 449, 600, "1 kg", mango, "12 mins"),
  p("Fresh Pomegranate", "fruits", 159, 200, "2 pcs", pomegranate),
  p("Kiran Watermelon", "fruits", 79, 110, "1 pc (~3kg)", watermelon, "15 mins"),
  p("Imported Kiwi", "fruits", 199, 240, "4 pcs", apples),
  p("Yellow Pineapple", "fruits", 89, 120, "1 pc", mango),
  p("Coconut Tender", "fruits", 65, 80, "1 pc", watermelon, "12 mins"),
  p("Papaya Ripe", "fruits", 75, 95, "1 pc (~1kg)", mango),
  p("Sweet Lime (Mosambi)", "fruits", 89, 110, "1 kg", oranges),
  p("Red Cherries", "fruits", 349, 420, "250 g", strawberries),
  p("Fuji Apples Imported", "fruits", 269, 320, "1 kg", apples),
  p("Black Grapes", "fruits", 129, 160, "500 g", grapes),

  // VEGETABLES (16)
  p("Hybrid Tomatoes", "vegetables", 39, 55, "500 g", tomato, "9 mins"),
  p("Organic Carrots", "vegetables", 59, 75, "500 g", carrot),
  p("Broccoli Crowns", "vegetables", 89, 110, "1 pc (~300g)", broccoli),
  p("Red Onions", "vegetables", 45, 60, "1 kg", onion, "8 mins"),
  p("Baby Potatoes", "vegetables", 55, 75, "500 g", potato),
  p("Fresh Spinach", "vegetables", 25, 35, "250 g", spinach),
  p("English Cucumber", "vegetables", 29, 40, "500 g", cucumber, "9 mins"),
  p("Bell Peppers Mix", "vegetables", 119, 150, "500 g", peppers),
  p("Ginger", "vegetables", 39, 55, "200 g", potato, "8 mins"),
  p("Garlic Peeled", "vegetables", 69, 90, "200 g", onion),
  p("Lady Finger (Bhindi)", "vegetables", 49, 65, "500 g", broccoli),
  p("Cauliflower", "vegetables", 59, 75, "1 pc", broccoli),
  p("Green Peas", "vegetables", 75, 95, "500 g", peppers),
  p("Beetroot", "vegetables", 35, 48, "500 g", carrot),
  p("Coriander Bunch", "vegetables", 15, 22, "100 g", spinach, "8 mins"),
  p("Lemons", "vegetables", 25, 35, "250 g", oranges),

  // DAIRY (12)
  p("Amul Toned Milk", "dairy", 32, 34, "500 ml", milk, "7 mins"),
  p("Full Cream Milk", "dairy", 36, 40, "500 ml", milk, "7 mins"),
  p("Cheddar Cheese Block", "dairy", 215, 260, "200 g", cheese),
  p("Greek Yogurt", "dairy", 79, 95, "400 g", yogurt, "8 mins"),
  p("Amul Butter", "dairy", 60, 65, "100 g", butter, "8 mins"),
  p("Farm Eggs Brown", "dairy", 99, 120, "10 pcs", eggs, "9 mins"),
  p("Fresh Paneer", "dairy", 95, 120, "200 g", paneer),
  p("Mozzarella Cheese", "dairy", 245, 290, "200 g", cheese),
  p("Strawberry Yogurt", "dairy", 35, 45, "150 g", yogurt),
  p("Lassi Sweet", "dairy", 25, 30, "200 ml", milk, "8 mins"),
  p("White Eggs", "dairy", 79, 95, "10 pcs", eggs),
  p("Cream Cheese Spread", "dairy", 189, 220, "180 g", cheese),

  // SNACKS (14)
  p("Lays Salted Chips", "snacks", 20, 25, "55 g", chips, "9 mins"),
  p("Choco Chip Cookies", "snacks", 99, 120, "150 g", cookies),
  p("Dark Chocolate 70%", "snacks", 149, 180, "100 g", chocolate),
  p("Butter Popcorn", "snacks", 49, 60, "80 g", popcorn),
  p("Mixed Dry Fruits", "snacks", 449, 520, "250 g", nuts),
  p("Haldiram's Bhujia", "snacks", 65, 80, "200 g", namkeen),
  p("Oreo Cookies", "snacks", 30, 40, "120 g", cookies),
  p("KitKat Chocolate", "snacks", 45, 50, "37.5 g", chocolate),
  p("Roasted Almonds", "snacks", 299, 360, "200 g", nuts),
  p("Pringles Original", "snacks", 99, 120, "107 g", chips),
  p("Aloo Bhujia", "snacks", 55, 70, "200 g", namkeen),
  p("Hide & Seek Biscuits", "snacks", 35, 40, "100 g", cookies),
  p("Dairy Milk Silk", "snacks", 95, 110, "60 g", chocolate),
  p("Cashews W320", "snacks", 489, 580, "250 g", nuts),

  // BEVERAGES (12)
  p("Cold Pressed Orange Juice", "beverages", 119, 140, "750 ml", juice),
  p("Coca-Cola Can", "beverages", 40, 45, "300 ml", cola, "9 mins"),
  p("Bisleri Water", "beverages", 20, 25, "1 L", water, "8 mins"),
  p("Nescafé Classic", "beverages", 299, 360, "100 g", coffee),
  p("Tata Tea Gold", "beverages", 285, 340, "500 g", tea),
  p("Red Bull Energy", "beverages", 125, 140, "250 ml", energy),
  p("Tropicana Mixed Fruit", "beverages", 99, 120, "1 L", juice),
  p("Sprite Bottle", "beverages", 40, 45, "750 ml", cola),
  p("Sparkling Water", "beverages", 65, 75, "500 ml", water),
  p("Green Tea Bags", "beverages", 199, 240, "25 bags", tea),
  p("Cold Brew Coffee", "beverages", 149, 180, "300 ml", coffee),
  p("Mountain Dew", "beverages", 40, 45, "750 ml", cola),

  // HOUSEHOLD (10)
  p("Surf Excel Detergent", "household", 199, 230, "1 kg", detergent),
  p("Vim Dishwash Liquid", "household", 129, 155, "750 ml", dishwash),
  p("Lizol Floor Cleaner", "household", 175, 210, "1 L", cleaner, "12 mins"),
  p("Origami Tissue Roll", "household", 99, 130, "4 rolls", tissue),
  p("Garbage Bags Large", "household", 149, 180, "30 pcs", trash),
  p("Harpic Toilet Cleaner", "household", 89, 110, "500 ml", cleaner),
  p("Colin Glass Cleaner", "household", 99, 120, "500 ml", cleaner),
  p("Ariel Detergent Liquid", "household", 349, 420, "1 L", detergent),
  p("Pril Lemon Liquid", "household", 99, 120, "500 ml", dishwash),
  p("Kitchen Tissue Roll", "household", 79, 95, "2 rolls", tissue),

  // PERSONAL CARE (10)
  p("Dove Shampoo", "personal", 349, 420, "340 ml", shampoo, "12 mins"),
  p("Pears Soap Bar", "personal", 75, 90, "100 g", soap),
  p("Colgate Total Toothpaste", "personal", 145, 180, "200 g", toothpaste),
  p("Nivea Deodorant", "personal", 199, 240, "150 ml", deo),
  p("Vaseline Body Lotion", "personal", 269, 320, "400 ml", lotion),
  p("Head & Shoulders", "personal", 299, 360, "340 ml", shampoo),
  p("Dettol Soap Pack", "personal", 145, 180, "4 x 75g", soap),
  p("Sensodyne Toothpaste", "personal", 169, 200, "150 g", toothpaste),
  p("Axe Body Spray", "personal", 229, 270, "150 ml", deo),
  p("Nivea Face Wash", "personal", 175, 220, "100 ml", lotion),

  // BAKERY (10)
  p("Sourdough Loaf", "bakery", 145, 170, "400 g", bread),
  p("Butter Croissant", "bakery", 65, 80, "1 pc", croissant),
  p("Blueberry Muffins", "bakery", 199, 240, "4 pcs", muffin),
  p("Burger Buns Pack", "bakery", 49, 60, "6 pcs", buns),
  p("Choco Truffle Cake", "bakery", 449, 550, "500 g", cake),
  p("Brown Bread", "bakery", 55, 65, "400 g", bread),
  p("Almond Croissant", "bakery", 89, 110, "1 pc", croissant),
  p("Banana Walnut Muffin", "bakery", 59, 75, "1 pc", muffin),
  p("Pav Buns", "bakery", 35, 45, "6 pcs", buns),
  p("Red Velvet Pastry", "bakery", 149, 180, "1 pc", cake),
];
