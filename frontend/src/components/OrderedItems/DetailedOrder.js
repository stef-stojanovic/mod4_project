import React, { Component } from 'react'
import Title from "../Title"
import DetailedOrderColumns from './DetailedOrderColumns'
import { ProductConsumer} from '../../context'
import DetailedOrderList from './DetailedOrderList'
import DetailedOrderTotals from './DetailedOrderTotals.js'
import EmptyCart from './EmptyCart.js'


export default class DetailedOrder extends Component {

    state={
        orderedItems: [],
        orderTotal: 0
    }

    
    componentDidMount = () => {
        let id = this.props.match.params.id
        
            fetch(`http://localhost:3000/orders/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
            .then(response => response.json())
            .then(result => {
                
                this.setState(()=>{
                    return {
                        orderedItems: result.ordered_items,
                        orderTotal: result.order.order_total
                    }
                })
            })

    }

    
    render() {
        return (
            <section>
                <ProductConsumer>
                    {() => {
                        if(this.state.orderedItems.length > 0){
                            return(
                            <React.Fragment>
                                <Title name="your" title="Order"></Title>
                                <DetailedOrderColumns />
                                <DetailedOrderList value={this.state.orderedItems}/>
                                <DetailedOrderTotals value={this.state.orderTotal} />
                            </React.Fragment>
                            )}
                        else{
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
