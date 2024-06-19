import { OrderItem } from "../types";
import { formatCurrency } from "../helpers/index";
import { useMemo } from "react";

type OrderTotalsProps = {
  order: OrderItem[];
  tipPercent: number;
  resetOrder: () => void;
};
const OrderTotals = ({ order, tipPercent,resetOrder }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(
    () => subtotalAmount * tipPercent,
    [tipPercent, subtotalAmount]
  );

  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y propina</h2>
        <p>
          Subtotal a pagar {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button 
        onClick={()=> resetOrder()}
        disabled={order.length === 0}
        className="w-full bg-black p-3 rounded-lg text-white font-black disabled:opacity-50"
      >
        Guardar orden
      </button>
    </>
  );
};

export default OrderTotals;
