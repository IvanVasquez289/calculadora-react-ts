import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}
const MenuItem = ({item}: MenuItemProps) => {
  return (
   <>
    <button className="w-full border-teal-400 border-2 flex justify-between p-3 hover:bg-teal-200">
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
   </>
  )
}

export default MenuItem