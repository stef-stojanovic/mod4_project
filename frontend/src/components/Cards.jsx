import React, { Component } from 'react'
import Card from './CardUI';


export default class Cards extends Component {
    render() {
        return (
            <div className="card-deck">
                <div className="rowgit ">
                   <div className="col-md-4"> <Card /> </div>
                   <div className="col-md-4"> <Card /> </div>
                   <div className="col-md-4"> <Card /> </div>
                </div>
            </div>
        )
    }
}



