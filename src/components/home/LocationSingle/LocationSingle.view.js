import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Reviews from '../../Shared/Reviews/Reviews.view'


export default class LocationSingle extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <article>
                <Link to= {'/locationInner/' + this.props.id}>
                <img src={this.props.img_main_url} alt=""/></Link>
                <p><span className="price">{this.props.price}</span> {this.props.location_name + " in: " + this.props.city}</p>
                <Reviews reviewsCount={this.props.reviws_count} stars={this.props.reviws_average}/>
            </article>

        )
    }
}  