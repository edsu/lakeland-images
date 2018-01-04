import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Image.css'

class Images extends Component {

  render() {
    return (
      <div className={style.Image}>
        <a href={'http://lakeland.umd.edu/items/show/' + this.props.item.id}>
        <img src={'static/' + this.props.item.id + '/square_thumbnail.jpg'}/>
        </a>
      </div>
    )
  }

}

Images.propTypes = {
  item: PropTypes.object
}

export default Images
