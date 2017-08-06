import React, { Component } from 'react';

export default class Map extends Component{
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(){
        this.map.setCenter({lat: parseInt(this.props.lat), lng: parseInt(this.props.lng)})
    }

    shouldComponentUpdate(){
        return false
    }

    componentDidMount(){
        this.map = new google.maps.Map(this.$map, {
            center:{lat: parseInt(this.props.lat), lng: parseInt(this.props.lng) },
            zoom: 11
        })

        this.marker = new google.maps.Marker({
          map: this.map,
          position: {lat: parseInt(this.props.lat), lng: parseInt(this.props.lng) },
        });
        // debugger
    }

    render(){
        return(
            <div className="myMap" id="myMap" ref={(el) => {this.$map = el}}></div>
        )
    }
} 