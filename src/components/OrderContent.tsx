import { formatCurrency } from "../helpers";
import type {  MenuItem, OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void
};
const OrderContent = ({ order,removeItem }: OrderContentProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="mt-10 ">
        {order.length === 0 ? (
            <p>No hay items en el carrito</p>
        ):(
            order.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-t p-5 border-slate-200  last-of-type:border-b">
                    <div>
                        <p>{item.name} - {formatCurrency(item.price)}</p>
                        <p className="text-md font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                        </p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="bg-red-500 h-8 w-8 rounded-full text-white hover:bg-red-800 transition-colors">
                        X
                    </button>
                </div>
            ))
        )}
      </div>
    </div>
  );
};

export default OrderContent;
