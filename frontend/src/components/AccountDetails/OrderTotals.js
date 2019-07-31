import React from 'react'

export default function OrderTotals({value}) {
    let total = 0;
    total = value.map(order => {
        return order.order_total
    })
    total = total.reduce((a, b)=>a+b)
    return (
        <div>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-auto col-sm-12 text-capitalize text-right">
                        <h5>
                            <span className="text-title">
                            total orders : </span>
                            <strong>$ {total}</strong>
                        </h5>
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        </div>
    )
}
