import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipForm from "./components/TipForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, setTip, tipPercent, resetOrder } =
    useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>
      <main className="py-10 max-w-5xl mx-auto grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className=" border-dashed border-2 border-slate-500 rounded p-5 space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContent order={order} removeItem={removeItem} />
              <TipForm setTip={setTip} tipPercent={tipPercent} />
              <OrderTotals
                order={order}
                tipPercent={tipPercent}
                resetOrder={resetOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
