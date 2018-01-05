import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
// import Image from './Image'
import style from './Images.css'

class Images extends Component {

  render() {
    const masonryOpts = {
      itemSelector: '.item',
      transitionDuration: 2000

    }
    return (
      <Masonry
        className={style.Images}
        options={masonryOpts}>
        {window.ITEMS.map((item) => {
          return (
            <figure className={'item'} key={'item-' + item.id}>
              <img src={'static/' + item.id + '/fullsize.jpg'} />
              <figcaption>
                {item.title}
              </figcaption>
            </figure>
          )
        })}
      </Masonry>
    )
  }
}

export default Images
