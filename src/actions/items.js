export const FILTER = 'FILTER'
export const DISPLAY_MORE = 'DISPLAY_MORE'
export const GET_ITEM = 'GET_ITEM'

export function filter(itemTypes) {
  return {
    type: FILTER,
    itemTypes: itemTypes
  }
}

export function displayMore() {
  return {
    type: DISPLAY_MORE
  }
}

export function getItem(itemId) {
  return {
    type: GET_ITEM,
    itemId: itemId
  }
}
