import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { removeFromWishListFunc } from '../../actions/addingWish.action'

import SingleWish from '../../components/SingleWish/SingleWish.view'



class App extends Component {
	constructor(props){
		super(props)
		this.state={wishedLocations:[]}
	}

	// componentWillMount(){
	// 	this.filterLocations()
	// }

	filterLocations() {
        let cuurentLocationFilter = this.props.locationManage.fullList.filter((CurLocation) => {
            for (let id of this.props.addingWish) {
                if (CurLocation.id === id) {
                    return true
                }
            }
            return false

        })
        // this.setState({ wishedLocations: cuurentLocationFilter })
        return cuurentLocationFilter
		
    }



	render() {
		const { 
			locationManage
		  } = this.props
		  let currentWishes = this.filterLocations()

		return (
			<div className="wishList">
                <h2>WishList</h2>
				{currentWishes.map((list,i) => {
                       return <SingleWish data={list} key={i} remove={this.props.removeFromWishList}/>
                    })}
		
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
		removeFromWishList: (locationId) => dispatch(removeFromWishListFunc(locationId))


	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);