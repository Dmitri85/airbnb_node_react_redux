export default function addingWish(state = [], action) {
  switch (action.type) {
    case 'ADD WISH':
      return [...state, action.id]
    case 'REMOVE WISH':
      return state.filter( (wish) => wish !== action.locationId)
    default:
      return state
  }
}
