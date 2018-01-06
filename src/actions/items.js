export const FILTER = 'FILTER'
export const DISPLAY_MORE = 'DISPLAY_MORE'

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
