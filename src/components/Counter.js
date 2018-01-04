import React from 'react'
import PropTypes from 'prop-types'
import style from './Counter.css'

const Counter = (props) => {
  return (
    <div className={style.Counter}>
      <button onClick={props.add}>+</button>
      <button onClick={props.subtract}>-</button>
      <div className={style.Result}>
        count = { props.count }
      </div>
    </div>
  )
}

Counter.propTypes = {
  add: PropTypes.func,
  subtract: PropTypes.func,
  count: PropTypes.number
}

export default Counter
