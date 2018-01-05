import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import style from './Image.css'

class Images extends Component {

  render() {
    const i = this.props.item
    return (
      <figure className={'item'} key={'item-' + i.id}>
        <img src={'static/' + i.id + '/fullsize.jpg'} />
        <figcaption>
          {i.title}
        </figcaption>
      </figure>
    )
  }

}

Images.propTypes = {
  item: PropTypes.object
}

export default Images
