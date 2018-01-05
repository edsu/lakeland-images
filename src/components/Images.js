import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import Image from './Image'
import style from './Images.css'

class Images extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentWillMount() {
    this.setState({
      message: 'hi',
      items: window.ITEMS.slice(0, 12)
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom >= docHeight - 1) {
      this.loadMore()
    }
  }

  loadMore() {
    const items = this.state.items
    const start = items.length
    const end = start + 12
    const newItems = window.ITEMS.slice(start, end)
    this.setState({
      items: items.concat(newItems)
    })
  }

  render() {
    const masonryOpts = {
      itemSelector: '.item',
      transitionDuration: 250
    }
    return (
      <Masonry
        className={style.Images}
        options={masonryOpts}>
        {this.state.message}
        {this.state.items.map((item) => {
          return <Image key={'item-' + item.id} item={item} />
        })}
      </Masonry>
    )
  }
}

export default Images
