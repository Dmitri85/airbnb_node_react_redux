const ADD_WISH = 'ADD WISH'
const REMOVE_WISH = 'REMOVE WISH'


export const addToWishListFunc = (id)=> ({ type: ADD_WISH, id })
export const removeFromWishListFunc = (locationId)=> ({ type: REMOVE_WISH, locationId })

