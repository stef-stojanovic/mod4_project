import React from 'react'

export default function DetailedOrderTotals({value}) {
    const cartTotal = value
    
    return (
        <div>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-auto col-sm-8 text-capitalize text-right">
                       
                        <h5>
                            <span className="text-title">
                            total : </span>
                            <strong>$ {cartTotal} </strong>
                        </h5>
                       
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        </div>
    )
}
