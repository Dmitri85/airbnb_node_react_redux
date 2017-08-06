import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import css from './login.css'

class App extends Component {
	constructor(props){
		super(props)
	}

	render() {
		const { 
			locationManage,
            addingWish,
			reservationAdd
		  } = this.props

		return (
			<div className={css['login']}>
                <section id={css['content']}>
                    <form action="/login" method="post">
                        <h1>Login</h1>
                        <div>
                            <input type="text" placeholder="Username" name="username" required="" id={css['username']}/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" name="password" required="" id={css['password']} />
                        </div>
						<div>
							<label>Remember Me</label>
							<input type="checkbox" class="form-control" name="remember" value="yes"/>
                        </div>
                        <div>
                            <input type="submit" value="Log in" />
                        </div>
                    </form>
                </section>
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