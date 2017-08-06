import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './DataCruncher.css'

class DataCruncher extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {user,fetchData} = this.props
    return (
      <div class={css.main} >
		<button class={css.btn} onClick={fetchData}> Fetch Some Data </button>        
		<textarea  class={css.ta} rows="4" cols="50" value={user}></textarea>
      </div>
    )
  }
}

export default DataCruncher