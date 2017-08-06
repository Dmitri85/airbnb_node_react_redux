import React, { Component } from 'react';
import LocationSingle from '../LocationSingle/LocationSingle.view'

export default class Locations extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {
			locationsData
		  } =  this.props
        return(
            <main>
                { locationsData.map((location,i) => <LocationSingle key={i} {...locationsData[i]}/>)}
            </main>
        )
    }
}  