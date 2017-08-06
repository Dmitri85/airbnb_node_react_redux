import { combineReducers } from 'redux'
import locationManage from './locationManage'
import addingWish from './addingWish.reducer'
import reservationAdd from './reservation.reducer'
import singleLocationImport from './singleLocationImport.reducer'


const rootReducer = combineReducers({
  locationManage, addingWish, reservationAdd, singleLocationImport
})

export default rootReducer

