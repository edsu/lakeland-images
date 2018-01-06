import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Item.css'

class Item extends Component {

  render() {
    return <h1 className={style.Item}>Item: {this.itemId}</h1>
  }

}

Item.propTypes = {
  itemId: PropTypes.number
}

export default Item
