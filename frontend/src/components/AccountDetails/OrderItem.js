import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderItem({order}) {
    const {id, user_id, order_total, created_at } = order;

    return (
        <div className = "row my-2 text-capitalize text-right">
        
            <div className = "col-10 mx-auto col-lg-2">
                    <Link to={`/detailedOrder/${id}`}>
                        View Details: Order-{id}
                    </Link>
            </div>
        
            <div className = "col-10 mx-auto col-lg-2">
                {user_id}
            </div>
        
            <div className = "col-10 mx-auto col-lg-2">
                <strong>Date : {created_at} </strong>
            </div>

            <div className = "col-10 mx-auto col-lg-2">
                $ {order_total}
            </div>
        
        </div>
    )
}
