import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


// import css from './App.css'

import Header from '../../components/home/Header/Header.view'
import Locations from '../../components/home/Locations/Locations.view'


class App extends Component {
	constructor(props){
        super(props)
		this.state = {original_list: [], currentList: []}
    }

	
	filterLocations(where, guests) {
		let cuurentLocationFilter = this.props.locationManage.fullList.filter((CurLocation) => {
			return CurLocation.city.startsWith(where.charAt(0).toUpperCase()) && CurLocation.max_guests >= guests
		})
		this.setState({ currentList: cuurentLocationFilter })
	}

	render() {
		const {
			locationManage
		  } = this.props

			return (
				<div className="wrapper">
					<Header  all={locationManage.fullList} filterLocations={this.filterLocations.bind(this)}/>
					<Locations locationsData = {this.state.currentList.length > 0 ? this.state.currentList : locationManage.fullList}/>

				</div>
			)

	}
}

function mapStateToProps(state) {
	const { locationManage, singleLocationImport } = state
	return {
		locationManage, singleLocationImport
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// doIncrement: () => dispatch(increment()),

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
