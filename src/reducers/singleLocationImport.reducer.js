import { SINGLE_FETCHING_LOCATION,SINGLE_FETCHING_COMPLETE,SINGLE_ERROR } from '../actions/locationImport'

export default function singleLocationImport(state = {}, action) {
  switch (action.type) {
    case SINGLE_FETCHING_LOCATION:
      return state
    case SINGLE_FETCHING_COMPLETE:
      return action.payload
	case SINGLE_ERROR:
      return 	action.payload.message
	  
    default:
      return state
  }
}