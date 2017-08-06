import React, { Component } from 'react';
import Search from '../Search/Search.view'


export default class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header>
                <h1><span>Where to?</span>Start your next adventure on skyTrip.</h1>
                <Search {...this.props}/>
            </header>

        )
    }
}    