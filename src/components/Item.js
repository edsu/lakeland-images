import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Item.css'

class Item extends Component {

  componentDidMount() {
    this.props.getItem(this.props.itemId)
  }

  render() {
    const i = this.props.item
    if (i) {
      return (
        <div className={style.Item}>
          <figure>
            <img src={'static/' + i.id + '/fullsize.jpg'} />
            <figcaption>
              {i.title}
            </figcaption>
          </figure>
        </div>
      )
    } else {
      return <h1>{this.props.itemId}</h1>
    }
  }

}

Item.propTypes = {
  getItem: PropTypes.func,
  item: PropTypes.object,
  itemId: PropTypes.number
}

export default Item
