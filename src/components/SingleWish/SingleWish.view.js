import React, { Component } from 'react';
import Rating from '../Shared/Rating/Rating.view'
import {
  Link
} from 'react-router-dom';




export default class SingleWish extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    averageRating(){
        let ave  = 0;
        let count = this.props.data.reviews.length
        let total = 0;
        for(let i = 0 ; i < count; i++){
            total += this.props.data.reviews[i].rating
            // debugger
        }
        ave = parseInt(total / count)
        return ave 
    }

    removeHandle(){
        this.props.remove(this.props.data.id)
    }

   
    render() {

        let num = this. averageRating()

        return (
            <div className="singleListRow">
                <div className="left">
                    <img src={this.props.data.bigImageUrl}/>
                </div>
                <div className="center">
                    <h4>{this.props.data.name}</h4>
                    <p className="wishPlace">{this.props.data.city.name + ",  " + this.props.data.country.name}</p>
                    <p>
                        <span>
                            <Rating stars = {num}/>
                        </span>
                        {this.props.data.reviews.length + ' ' + ' reviews'}
                    </p>
                    <p className="wishDescription">{this.props.data.description}</p>
                </div>
                <div className="right">
                    <h3>{this.props.data.price}</h3>
                    <div className="detalsBtn"><Link to= {'/locationInner/' + this.props.data.id}>Details</Link></div>
                    <div className="removeBtn" onClick={this.removeHandle.bind(this)}>Remove</div>
                </div>
            </div>


        )
    }
}  