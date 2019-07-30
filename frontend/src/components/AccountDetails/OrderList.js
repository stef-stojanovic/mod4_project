import React from 'react'
import OrderItem from './OrderItem'

export default function OrderList({value}) {
    // const { cart } = value;
    return (
        <div className="container-fluid">
            {value.map(order => {
                return <OrderItem key={order.id} order={order}/>
            })}
            
        </div>
    )
}
