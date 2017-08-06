export const FIRST_FETCHING_LOCATION = 'FIRST_FETCHING_LOCATION'
export const FIRST_FETCHING_COMPLETE  = 'FIRST_FETCHING_COMPLETE'
export const FETCH_ERROR = 'FETCH_ERROR'

export const SINGLE_FETCHING_LOCATION = 'SINGLE_FETCHING_LOCATION'
export const SINGLE_FETCHING_COMPLETE  = 'SINGLE_FETCHING_COMPLETE'
export const SINGLE_ERROR = 'SINGLE_ERROR'

export const locationImport = ()=> (
	dispatch => {

		dispatch({ type: FIRST_FETCHING_LOCATION })

		return  fetch(`/api`)
				.then((res) =>  { return res.json()})
				.then(res => dispatch({
					type	: FIRST_FETCHING_COMPLETE,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCH_ERROR,
					payload	: err
				}))
	  })

export const singleLocationImport = (id)=> (
	dispatch => {

		dispatch({ type: SINGLE_FETCHING_LOCATION })

		return  fetch(`/api/locationInner/${id}`)
				.then((res) =>  { return res.json()})
				.then(res => dispatch({
					type	: SINGLE_FETCHING_COMPLETE,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: SINGLE_ERROR,
					payload	: err
				}))
	  })	  