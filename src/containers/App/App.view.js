import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'


import Home from '../Home/Home.view'
import NavBar from '../../components/NavBar/NavBar.view'
import LocationInner from '../../containers/Location/Location.view'
import About from '../../components/About/About.view'
import Reservation from '../Reservation/Reservation.view'
import WishList from '../../containers/WishList/WishList.view'
import Login from '../../containers/Login/Login.view'




import { locationImport } from '../../actions/locationImport'

import css from './App.css'

class App extends Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.firstLoad()
	}

	render() {
		const { 
			locationManage
			
		  } = this.props

		return (
			<div className="app">
				<NavBar/>
				<Route exact path="/" component={Home}/>
				<Route path="/locationInner/:id" component={LocationInner}/>
				<Route path="/about" component={About}/>
				<Route exact path="/reservation" component={Reservation}/> 
				<Route exact path="/wishList" component={WishList}/> 
				<Route exact path="/login" component={Login}/> 
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { locationManage, addingWish  } = state
	return {
		locationManage, addingWish
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// doIncrement: () => dispatch(increment()),
		firstLoad: () => dispatch(locationImport()),

	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));