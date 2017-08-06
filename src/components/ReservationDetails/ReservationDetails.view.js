import React, { Component } from 'react';
import MyDatePicker from '../Shared/DatePicker/DatePicker.view'
import moment from 'moment'


export default class Reservation extends Component{
    constructor(props){
        super(props)
        this.state = {
                      checkInCurrent: moment(this.props.seconderyData.from, 'DD-MM-YYYY'),
                      checkOutCurrent:moment(this.props.seconderyData.to, 'DD-MM-YYYY'),
                      minRange: moment(this.props.seconderyData.from, 'DD-MM-YYYY').add(1, "days"),
                     }

        this.handleChangeCheckIn = this.handleChangeCheckIn.bind(this)
        this.handleChangeCheckOut = this.handleChangeCheckOut.bind(this)
    }

    calcPrice(price){
        let days = this.state.checkOutCurrent.diff(this.state.checkInCurrent, 'days')
        return  days * price
    }

    handleChangeCheckIn(date){
        this.setState({checkInCurrent: date, minRange: date.add(1, "days")})
    }

    handleChangeCheckOut(date){
        this.setState({checkOutCurrent: date})
    }
    render(){
        const{
        } = this.props

        return(
            <div className="details">
                <h3>RESERVATION</h3>
                <table>
                    <tbody>
                        <tr id="chekIn">
                            <td>CHECK IN :</td>
                            <td><MyDatePicker date={this.props.seconderyData.from} onChange={this.handleChangeCheckIn}/></td>
                            
                        </tr>
                        <tr id="chekOut">
                            <td>CHECK OUT :</td>
                            <td><MyDatePicker minDate={this.state.minRange}  date={this.props.seconderyData.to} onChange={this.handleChangeCheckOut}/></td>
                        </tr>
                        <tr id="hotelName">
                            <td>HOTEL :</td>
                            <td>{this.props.data.name}</td>
                        </tr>
                        <tr id="hotelPlace">
                            <td>PLACE :</td>
                            <td>{this.props.data.city + ",  " +this.props.data.country}</td>
                        </tr>
                        <tr id="guestsReserved">
                            <td>GUESTS :</td>
                            <td>{this.props.seconderyData.guests}</td>
                        </tr>
                        <tr id="pricePerNight">
                            <td> PRICE PER NIGHT :</td>
                            <td>{this.props.data.price}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="totalPrice">
                    <h4>TOTAL PRICE</h4>
                    <span>{this.calcPrice(this.props.data.price)}</span>
                </div>
                <div id="Confirm">CONFIRM</div>

            </div>
        )
    }

}    