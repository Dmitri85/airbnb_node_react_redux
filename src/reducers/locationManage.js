import { FIRST_FETCHING_LOCATION,FIRST_FETCHING_COMPLETE,FETCH_ERROR } from '../actions/locationImport'

export default function locationManage(state = {fullList:[]}, action) {
  switch (action.type) {
    case FIRST_FETCHING_LOCATION:
      return state
    case FIRST_FETCHING_COMPLETE:
      return {
		  fullList	:	action.payload
	  }
	case FETCH_ERROR:
      return {
		  fullList	:	action.payload.message
	  }
    default:
      return state
  }
}