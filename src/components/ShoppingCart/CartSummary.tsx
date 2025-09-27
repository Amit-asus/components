import { useMemo } from "react";

interface Props {
  items: { price: number; qty: number }[];
}
const CartSummary = ({ items }: Props) => {
  const { totalQty, totalPrice }: { totalQty: number; totalPrice: number } =
    useMemo(() => {
      const qty = items.reduce((acc, it) => it.qty + acc, 0);
      const price = items.reduce((sum, it) => it.qty * it.price + sum, 0);
      return { totalQty: qty, totalPrice: price };
    }, [items]);
  return (
    <div className="border-t pt-3 text-right">
      <div className="font-medium">Total items: {totalQty}</div>
      <div className="font-bold">Total: ${totalPrice}</div>
    </div>
  );
};

export default CartSummary;
