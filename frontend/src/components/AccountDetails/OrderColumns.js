import React from 'react'

export default function OrderColumns() {
    return (
        <div className="container-fluid text-right d-sm-block d-md-block d-lg-block">
            <div className = "row">
                <div className = "col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Order ID</p>
                </div>

                <div className = "col-10 mx-auto col-lg-2">
                <p className="text-uppercase">User ID</p>
                </div>
        
                <div className = "col-10 mx-auto col-lg-2">
                <p className="text-uppercase">date created</p>
                </div>

                <div className = "col-10 mx-auto col-lg-2">
                <p className="text-uppercase">order total</p>
                </div>

            </div>
        </div>
    )
}
