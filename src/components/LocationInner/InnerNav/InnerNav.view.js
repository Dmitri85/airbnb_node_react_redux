import React, { Component } from 'react';

export default class InnerNav extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="innerNav">
                <ul>
                    <li><a href={"#/locationInner/" + this.props.id + "#smallHeader"}>Overview</a></li>
                    <li><a href={"#/locationInner/" + this.props.id + "#locationReviewsMain"}>Reviews</a></li>
                    <li><a href={"#/locationInner/" + this.props.id + "#myMap"}>Location</a></li>
                </ul>
            </div>
        )
    }
}    