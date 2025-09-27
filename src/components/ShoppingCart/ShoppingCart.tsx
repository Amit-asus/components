import { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

interface Item {
  id: number;
  name: string;
  price: number;
  qty: number;
}

const initialItems: Item[] = [
  { id: 1, name: "Apple", price: 2, qty: 1 },
  { id: 2, name: "Banana", price: 1, qty: 2 },
  { id: 3, name: "Orange", price: 3, qty: 1 },
];

export default function ShoppingCart() {
  const [items, setItems] = useState<Item[]>(initialItems);

  function updateQty(id: number, delta: number) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it
      )
    );
  }

  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold mb-3">🛒 Shopping Cart</h2>

        <ul className="space-y-2 mb-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} onUpdateQty={updateQty} />
          ))}
        </ul>

        <CartSummary items={items} />
      </div>
    </div>
  );
}
