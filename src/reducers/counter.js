import { ADD, SUBTRACT } from '../actions/counter'

const initialState = {
  count: 0
}

export default function queue(state = initialState, action) {

  switch (action.type) {

    case ADD: {
      return {
        ...state,
        count: state.count + 1
      }
    }

    case SUBTRACT: {
      return {
        ...state,
        count: state.count - 1
      }
    }

    default: {
      return state
    }

  }

}
