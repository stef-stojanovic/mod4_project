import React from 'react'

export default function OrderItem({order}) {
    const {id, user_id, order_total, created_at } = order;

    return (
        <div className = "row my-2 tect-capitalize text-center">
            <div className = "col-10 mx-auto col-lg-2">
                {id}
            </div>
            <div className = "col-10 mx-auto col-lg-2">
                {user_id}
            </div>
            <div className = "col-10 mx-auto col-lg-2">
                $ {order_total}
            </div>
            {/* <div className = "col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"/>
                </div>
            </div> */}
            <div className = "col-10 mx-auto col-lg-2">
                <strong>Date : {created_at} </strong>
            </div>
        </div>
    )
}
