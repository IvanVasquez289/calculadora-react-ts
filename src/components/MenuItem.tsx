import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem;
    addItem: (item: MenuItem) => void
}
const MenuItem = ({item, addItem}: MenuItemProps) => {
  return (
   <>
    <button onClick={()=> addItem(item)} className="w-full border-teal-400 rounded-lg border-2 flex justify-between p-3 hover:bg-teal-200">
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
   </>
  )
}

export default MenuItem