import React, { Component } from 'react'
import Image from './Image'
import style from './Images.css'

class Images extends Component {

  render() {
    return (
      <div className={style.Images}>
        {window.ITEMS.map((item) => {
          return <Image key={item.id} item={item} />
        })}
      </div>
    )
  }
}

export default Images
