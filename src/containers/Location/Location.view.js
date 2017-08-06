import React, { Component } from 'react';

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToWishListFunc, removeFromWishListFunc } from '../../actions/addingWish.action'
import { bookMe } from '../../actions/reservation.action'
import { singleLocationImport } from '../../actions/locationImport'



import InnerNav from '../../components/LocationInner/InnerNav/InnerNav.view';
import SmallHeader from '../../components/LocationInner/SmallHeader/SmallHeader.view';
import LocationFeutures from '../../components/LocationInner/LocationFeutures/LocationFeutures.view';
import LocationDescription from '../../components/LocationInner/LocationDescription/LocationDescription.view';
import LocationReviewsMain from '../../components/LocationInner/LocationReviewsMain/LocationReviewsMain.view';
import BookingPlace from '../../components/LocationInner/BookingPlace/BookingPlace.view';
import SocialMediaShares from '../../components/LocationInner/SocialMediaShares/SocialMediaShares.view';
import Map from '../../components/LocationInner/Map/Map.view'; 
import ControlledCarousel from "../../components/Shared/Carusel/Carousel"



// import css from './App.css'



class App extends Component {
	constructor(props){
        super(props)
		this.state = {}
    }

    componentWillMount() {
        this.props.inportSingle(this.props.match.params.id)
        // debugger
        this.setState({ currentLocation: this.props.singleLocationImport })

    }



    componentWillReceiveProps(nextProps) {
        // nextProps.inportSingle(nextProps.match.params.location_id)
        this.setState({ currentLocation: nextProps.singleLocationImport })

    }

    render() {
        if (this.state.currentLocation.id === undefined) {
            return (<div></div>)
        }
        return (
            <div className="locationInner">
                <header>
                    <ControlledCarousel/>
                </header>
                <main>
                    <div className="PageInsideLeft">
                        <InnerNav id={this.state.currentLocation.id}/>
                        <SmallHeader data={this.state.currentLocation}/>
                        <LocationFeutures data={this.state.currentLocation}/>
                        <LocationDescription description={this.state.currentLocation.description}/>
                        <LocationReviewsMain data = {this.state.currentLocation.reviews}/>
                    </div>
                    <div className="PageInsideRight">
                        <BookingPlace  id={this.state.currentLocation.id} bookFunc={this.props.moveToBook}/>
                        <SocialMediaShares addingWishF={this.props.addToWishList} id={this.state.currentLocation.id}/>
                        <Map lng={this.state.currentLocation.geo_lng} lat={this.state.currentLocation.geo_lat}/>
                    </div>

                </main>

            </div>
        )

    }
}

function mapStateToProps(state) {
	const { locationManage, addingWish, reservationAdd, singleLocationImport } = state
	return {
		locationManage, addingWish, reservationAdd, singleLocationImport
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// doIncrement: () => dispatch(increment()),
		addToWishList: (id) => dispatch(addToWishListFunc(id)),
        moveToBook: (location, guests, from, to) => dispatch(bookMe(location, guests, from, to)),
        inportSingle: (id) => dispatch(singleLocationImport(id))


	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
