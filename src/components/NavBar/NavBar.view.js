import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class App extends Component{
    constructor(props){
        super(props)
    }
    
    render() {

        return(

            <div className="very_head">
                <Link to="/"><img src="../static/icons/travel-1883060_960_720.png"/></Link>        
                <ul className="big_menu_ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/reservation">reservation</Link></li>
                    <li><Link to="/wishList">Sing Up</Link></li>
                    <li><a href="/login">Log In</a></li>
                </ul>
            </div>
        )
    }
}