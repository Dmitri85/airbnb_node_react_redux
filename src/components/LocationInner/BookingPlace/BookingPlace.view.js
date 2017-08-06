import React, { Component } from 'react';
import DatePicker from '../../Shared/DatePicker/DatePicker.view'
import moment from 'moment'
import {
  Link
} from 'react-router-dom';


export default class BookingPlace extends Component{
    constructor(props){
        super(props)
        // this.state = {minRange: moment()}
        this.state = {
                      checkInCurrent: null,
                      checkOutCurrent:null,
                      minRange: null,
                      guests: null
                     }

        this.handleChangeCheckIn = this.handleChangeCheckIn.bind(this)
        this.handleChangeCheckOut = this.handleChangeCheckOut.bind(this)
        this.handleBookingConfirm = this.handleBookingConfirm.bind(this)
        this.handleBooking = this.handleBooking.bind(this)
    }

     handleChangeCheckIn(date){
        this.setState({checkInCurrent: date, minRange: date.add(1, "days")})
    }

    handleChangeCheckOut(date){
        this.setState({checkOutCurrent: date})
    }

    handleBooking(){
        let guestsVal = this.$guestsInp.value
        this.setState({guests: guestsVal })
    }

    handleBookingConfirm(){
        this.props.bookFunc(this.props.id, this.state.guests, this.state.checkInCurrent, this.state.checkOutCurrent)
    }

    render() {
        return (
            <div className="bookingPlace">
                <div className="pricePerNigth">
                    <div className="priceSection"><span>344 </span><span>per night</span></div>
                </div>
                <div className="check">
                    <div className="checkLabels">
                        <label htmlFor="checkIn">Check In</label>
                        <label htmlFor="checkOut">Check Out</label>
                    </div>
                    <div className="checkInputs">
                        <DatePicker onChange={this.handleChangeCheckIn}/>
                        <DatePicker minDate={this.state.minRange} onChange={this.handleChangeCheckOut}/>
                        {/*<input className="dateFrom" id="checkIn" type="date" />
                        <input className="dateTo" id="checkOut" type="date" />*/}
                    </div>
                </div>
                <div className="checkGuests">
                    <div>Guests</div>
                    <input type="number" min="1" max="4" ref={(el) => {this.$guestsInp = el}} onChange={this.handleBooking}/>
                </div>
                <button onClick={this.handleBookingConfirm}><Link to="/reservation">Request to book</Link></button>
                <p>You won’t be charged yet</p>
            </div>
        )
    }
} 