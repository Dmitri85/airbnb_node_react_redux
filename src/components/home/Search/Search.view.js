import React, { Component } from 'react';
import Lodash, { lodash } from 'lodash';


export default class Search extends Component{
    constructor(props){
        super(props)
        this.state = {where:'', guests:''}
        this.countries={}
        this.where=''   
        this.guest=''                                                     
    }

    updateFilteredSearch(event){
        let where = this.$input.value
        let guest = parseInt(this.$guest.value)
        this.props.filterLocations(where, guest)
    }

    render(){
        let cities= _.uniq(this.props.all.map((locationSingle) =>  locationSingle.city ))
        return(
            <div className="search">
                <div className="col_1">
                    <label htmlFor="where">Where</label>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input onChange = {(e) => this.updateFilteredSearch(e)} list="cityList" ref={(val) => this.$input = val} placeholder="Anywhere" id="where" name="where"/>
                    <datalist id="cityList">
                        {cities.map((city,i) => <option value={city} key={i}></option>)}
                    </datalist>    
                </div>

                <div className="col_2">
                    <label htmlFor="guests">Guests</label>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input onChange = {(e) => this.updateFilteredSearch(e)} ref={(val) => this.$guest = val} type="number"  min="1" max="4" placeholder="2 Guests" defaultValue="1" id="guests" name="guests"/>
                </div>

                {/*<div className="col_4">
                    <p></p>
                    <p><i className="fa fa-search" aria-hidden="true"></i> Anywhere * Anywtime * 1 Guests</p>
                </div>*/}
            </div>

        )
    }
}  