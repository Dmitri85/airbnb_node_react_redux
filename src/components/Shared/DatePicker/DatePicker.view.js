import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class Date extends Component {
  constructor (props) {
    super(props)
    // debugger
    let currentDate = this.props.date ?  moment(this.props.date, 'DD/MM/YYYY') : moment()
    this.state = {
      startDate: currentDate
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });

    if(typeof this.props.onChange === "function"){
      this.props.onChange(date)
    }

  }

  render() {

    let minDateCurrent = this.props.minDate

    return <DatePicker
        dateFormat={'DD/MM/YYYY'}
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={this.props.minDate || moment()}
    />
  }
}