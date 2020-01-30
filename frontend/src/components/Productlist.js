import React, { Component } from 'react';
import Product from './Product';
import Title from './Title'
import { ProductConsumer } from '../context'

export default class Productlist extends Component {

   
    render() {
        return (
            // <Form onSubmit={this.props.handleSubmit}>
            //     <div>
            //         <label>Search</label>
            //         <input type=/>
            //     </div>
            // </Form>
            <React.Fragment>
                <div className = "py-5">
                    <div className="container">
                        <Title name="Sneaker" title="Seeker"></Title>
                        
                        <div className = "row">
                            <ProductConsumer>
                             {value => {
                                return value.products.map( product => {
                                    return <Product key={product.id} product={product} />
                                });
                            }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
           
        )
    }
}
