const BOOK = 'BOOK'

export const bookMe = (location, guests, from, to)=> ({ type: BOOK, location, guests, from, to })

