import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import Image from './Image'
import style from './Images.css'
import imageStyle from './Image.css'

class Images extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleImagesLoaded = this.handleImagesLoaded.bind(this)
  }

  componentWillMount() {
    window.ITEMS = this.shuffle(window.ITEMS)
    this.setState({
      loading: true,
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

  handleImagesLoaded() {
    this.setState({
      loading: false
    })
  }

  shuffle(array) {
    let currentIndex = array.length
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      const temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  render() {
    const masonryOpts = {
      itemSelector: '.' + imageStyle.Image,
      transitionDuration: 250,
      fitWidth: true
    }
    return (
      <Masonry
        className={style.Images}
        onImagesLoaded={this.handleImagesLoaded}
        options={masonryOpts}>
        {this.state.message}
        {this.state.items.map((item) => {
          return (
            <Image
              key={'item-' + item.id}
              loading={this.state.loading}
              item={item} />
          )
        })}
      </Masonry>
    )
  }
}

export default Images
