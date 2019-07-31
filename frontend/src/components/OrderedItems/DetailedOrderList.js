import React from 'react'
import DetailedOrderItem from './DetailedOrderItem'

export default function DetailedOrderList({value}) {
    return (
        <div className="container-fluid">
            {value.map(item => {
                return <DetailedOrderItem key={item.id} item={item}/>
            })}
            
        </div>
    )
}
