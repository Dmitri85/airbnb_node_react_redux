import React, { Component } from 'react';

export default class SocialMediaShares extends Component{
    constructor(props){
        super(props)
    }

    handleClick(){
        this.props.addingWishF(this.props.id)
    }

    render() {
        return (
            <div className="socialMediaShares">
                <button onClick={this.handleClick.bind(this)}>Save to wishlist</button>
                <p>86177 travelers saved this place</p>
                <div className="iconLinks">
                    <ul>
                        <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i className="fa fa-envelope" aria-hidden="true"></i></li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
} 