interface Props {
  item: { id: number; name: string; price: number; qty: number };
  onUpdateQty: (id: number, delta: number) => void;
}

const CartItem = ({ item, onUpdateQty }: Props) => {
  return (
    <li className="flex justify-between items-center border rounded px-3 py-2">
      <div>
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-gray-500">${item.price} each</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQty(item.id, -1)}
          className="px-2 py-1 border rounded"
        >
          −
        </button>
        <span>{item.qty}</span>
        <button
          onClick={() => onUpdateQty(item.id, +1)}
          className="px-2 py-1 border rounded"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
