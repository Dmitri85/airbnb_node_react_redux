import React, { Component } from 'react';

export default class LocationFeutures extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="locationFeutures">
                <div>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span>{this.props.data.max_guests} Guests</span>
                </div>
                <div>
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>{this.props.data.bedrooms} Bedroom</span>
                </div>
                <div>
                    <i className="fa fa-bed" aria-hidden="true"></i>
                    <span>{this.props.data.beds} Beds</span>
                </div>
            </div>
        )
    }
}    
