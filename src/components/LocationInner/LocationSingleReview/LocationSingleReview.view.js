import React, { Component } from 'react';
import Rating from '../../Shared/Rating/Rating.view'

export default class LocationSingleReview extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className="locationReviewsSingle">
                    <h4>{this.props.author}</h4>
                    <div className="ratingOnReview">
                        <Rating stars = {this.props.rating}/>
                    </div>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
} 