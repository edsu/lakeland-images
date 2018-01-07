import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from './Image.css'

class Image extends Component {

  render() {
    const i = this.props.item
    const className = this.props.loading ? style.ImageLoading : style.Image
    return (
      <Link to={'/item/' + i.id + '/'}>
        <figure className={className}>
          <img src={'static/' + i.id + '/fullsize.jpg'} />
          <figcaption>
            {i.title}
          </figcaption>
        </figure>
      </Link>
    )
  }

}

Image.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool
}

export default Image
