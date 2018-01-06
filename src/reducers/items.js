import { FILTER, DISPLAY_MORE } from '../actions/items'

const chunkSize = 12

const initialState = {
  items: [],
  position: 0
}

function shuffle(array) {
  let currentIndex = array.length
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    const temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

export default function queue(state = initialState, action) {

  switch (action.type) {

    case FILTER: {
      shuffle(window.DATA.items)
      const newItems = window.DATA.items.filter((i) => {
        if (action.itemTypes.length === 0) {
          return true
        } else {
          return action.itemTypes.indexOf(i.collection) >= 0
        }
      })
      return {
        ...state,
        items: newItems,
        position: chunkSize
      }
    }

    case DISPLAY_MORE: {
      return {
        ...state,
        position: state.position + chunkSize
      }
    }

    default: {
      return state
    }

  }

}
