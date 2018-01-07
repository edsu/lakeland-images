import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import style from './Item.css'

class Item extends Component {

  componentWillMount() {
    this.props.getItem(this.props.itemId)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const i = this.props.item

    const title = (
      <div>
        <header>Title</header>
        {i.title}
      </div>
    )

    let description = ''
    if (i.description) {
      description = (
        <div>
          <header>Description</header>
          {i.description}
        </div>
      )
    }

    let publisher = ''
    if (i.publisher) {
      publisher = (
        <div>
          <header>Publisher</header>
          {i.publisher}
        </div>
      )
    }

    let added = ''
    if (i.created) {
      added = (
        <div>
          <header>Added</header>
          {moment(i.created).format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      )
    }

    return (
      <div className={style.Item}>
        <figure>
          <img src={'static/' + i.id + '/fullsize.jpg'} />
          <figcaption>
            {title}
            {description}
            {publisher}
            {added}
            <br />
          </figcaption>
        </figure>
      </div>
    )
  }

}

Item.propTypes = {
  getItem: PropTypes.func,
  item: PropTypes.object,
  itemId: PropTypes.number
}

export default Item
