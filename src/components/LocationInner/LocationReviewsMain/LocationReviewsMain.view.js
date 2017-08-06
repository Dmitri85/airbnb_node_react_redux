import React, { Component } from 'react';

import LocationSingleReview from '../LocationSingleReview/LocationSingleReview.view'

export default class LocationReviewsMain extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="locationReviewsMain" id="locationReviewsMain">
                <h3>Customers Reviews</h3>
                { this.props.data.map((review, i) => 
                    <LocationSingleReview key={i} {...this.props.data[i]}/>
                ) }
            </div>
        )
    }
} 