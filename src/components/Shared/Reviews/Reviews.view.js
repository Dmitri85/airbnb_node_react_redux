import React, { Component } from 'react';
import Rating from '../Rating/Rating.view'

export default class Reviews extends Component{
    constructor(props){
        super(props)
        // debugger
    }

    // averageRating(){
    //     let ave  = 0;
    //     let count = this.props.stars.length
    //     let total = 0;
    //     for(let i = 0 ; i < count; i++){
    //         total += this.props.stars[i].rating
    //     }
    //     ave = parseInt(total / count)
    //     return ave 
    // }

    render(){
        // let num = this. averageRating()
        return(
            <p><Rating stars={this.props.stars}/>{ this.props.reviewsCount + ' reviews'}</p>
        )
    }
}  