import React, { Component } from 'react';

export default class LocationDescription extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="locationDescription">
                <p>{this.props.description}</p>
            </div>
        )
    }
}    