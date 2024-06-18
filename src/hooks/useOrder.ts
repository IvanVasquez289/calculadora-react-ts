import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        const orderExists =  order.some((orderState) => orderState.id === item.id)

        if(orderExists) {
            const updatedOrder = order.map((orderState) => {
                if(orderState.id === item.id) return {...orderState, quantity: orderState.quantity + 1}
                return orderState
            })
            setOrder(updatedOrder)
        }else{
            setOrder([...order,{...item, quantity: 1}])
        }
    }

    const removeItem = (id: MenuItem["id"]) => {
        const updatedOrder = order.filter((orderState) => orderState.id !== id)
        setOrder(updatedOrder)
    }

    return {
        order,
        addItem,
        removeItem
    }
}