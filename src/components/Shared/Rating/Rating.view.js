import React, { Component } from 'react';
import classnames from 'classnames';

export default class Rating extends Component {
    constructor(props){
        super(props)
    }

    createStars(rating){
        let stars=[];

        for(var i=0; i < 5; i++)
            {
            stars.push( 
                <i aria-hidden="true" key={i} className= {classnames( "fa", {
                    "fa-star": rating >= 1 , 
                    "fa-star-half-o":rating < 1 && rating >= 0.35  , 
                    "fa-star-o":rating < 0.35 
                    } )} />
                )

            rating--;
            }    
        
        return stars;
    }

    render(){
        return (
            <span>{this.createStars(this.props.stars)}</span>
        )
    }

}