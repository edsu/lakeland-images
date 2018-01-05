import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Image.css'

class Image extends Component {

  render() {
    const i = this.props.item
    const className = this.props.loading ? style.ImageLoading : style.Image
    return (
      <figure className={className}>
        <img src={'static/' + i.id + '/fullsize.jpg'} />
        <figcaption>
          {i.title}
        </figcaption>
      </figure>
    )
  }

}

Image.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool
}

export default Image
