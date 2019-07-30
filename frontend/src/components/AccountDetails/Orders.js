import React, { Component } from 'react'
import Title from "../Title"
import OrderColumns from './OrderColumns'
import NoOrders from "./NoOrders"
import { ProductConsumer} from '../../context'
import OrderList from './OrderList'
import OrderTotals from './OrderTotals.js'


export default class Orders extends Component {

    state={
        orders: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/orders', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(result => {
            this.setState({
                orders: result
            })
        })
    }

    render() {
        return (
            <section>
                    <ProductConsumer>
                        {()=>{
                            if(this.state.orders.length > 0){
                            return(
                            <React.Fragment>
                                <Title name="your" title="orders"></Title>
                                <OrderColumns />
                                <OrderList value={this.state.orders}/>
                                <OrderTotals value={this.state.orders}/>
                            </React.Fragment>
                            )}
                            else {
                                return <NoOrders />
                            }
                        }}
                        </ProductConsumer>
            </section>
        )
    }
}
