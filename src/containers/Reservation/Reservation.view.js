import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import Details from '../../components/ReservationDetails/ReservationDetails.view'



class App extends Component {
	constructor(props){
		super(props)
		this.state = {currentReservation:{}}
	}

	componentWillMount(){
		let cuurentLocationFilter = this.props.locationManage.fullList.filter((CurLocation) => {
           return CurLocation.id === this.props.reservationAdd.location
        })
        this.setState({currentReservation: cuurentLocationFilter[0]})
	}


	render() {
		const { 
			locationManage,
            addingWish,
			reservationAdd
		  } = this.props

		return (
			<div className="reservationWrap">
				<div className="left">
                    <img src={this.state.currentReservation.img_main_url} />
                    <p className="description">{this.state.currentReservation.description}</p>
                </div>
				<div className="right">
					<Details data={this.state.currentReservation} seconderyData={this.props.reservationAdd}/>
                </div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { locationManage, addingWish ,reservationAdd } = state
	return {
		locationManage, addingWish, reservationAdd
	}
}

function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);