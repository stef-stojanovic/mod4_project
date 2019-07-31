import React from 'react'

export default function DetailedOrderItem({item}) {
    const {img, title, price, total} = item;

    return (
        <div className = "row my-2 tect-capitalize text-center">
            <div className = "col-10 mx-auto col-lg-2">
                <img src={img} style={{width: '5rem', height:"5rem"}}
                className="img-fluid"
                alt="product"></img>
            </div>
            <div className = "col-10 mx-auto col-lg-2">
                <span className ="d-lg-none"> product : </span>
                {title}
            </div>
            <div className = "col-10 mx-auto col-lg-2">
                <span className ="d-lg-none"> price : $</span>
                {price}
            </div>
            <div className = "col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" >1</span>
                    </div>
                </div>
            
            </div>
         
            <div className = "col-10 mx-auto col-lg-2">
                <strong>item total : $ {price} </strong>
            </div>
        </div>
    )
}
