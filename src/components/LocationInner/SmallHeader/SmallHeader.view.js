import React, { Component } from 'react';
import Rating from '../../Shared/Rating/Rating.view'


export default class SmallHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="smallHeader" id="smallHeader">
                <h2>{this.props.data.location_name}</h2>
                <div> {this.props.data.city + ", " + this.props.data.country} </div>
                <p>
                    <span>
                        <Rating stars = {this.props.data.reviws_average}/>
                    </span>
                    {this.props.data.reviws_count + ' ' + ' reviews'}
                </p>
            </div>

        )
    }
}    