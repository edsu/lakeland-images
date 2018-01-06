import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import Image from './Image'
import style from './Images.css'
import imageStyle from './Image.css'
import Home from 'react-icons/lib/fa/home'
import User from 'react-icons/lib/fa/user'
import Document from 'react-icons/lib/fa/file-text-o'
import Refresh from 'react-icons/lib/fa/refresh'

class Images extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleImagesLoaded = this.handleImagesLoaded.bind(this)
    this.filter = this.filter.bind(this)
  }

  componentWillMount() {
    const allItems = this.shuffle(window.DATA.items)
    this.setState({
      loading: true,
      allItems: allItems,
      items: allItems.slice(0, 12)
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
    const newItems = this.state.allItems.slice(start, end)
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

  filter(itemType) {
    let types = []
    if (itemType === 'people') {
      types = ['Photos People']
    } else if (itemType === 'buildings') {
      types = ['Photos Houses']
    } else if (itemType === 'documents') {
      types = ['Other Documents', 'Maps', 'Property Descriptions']
    }

    this.setState({
      items: []
    })

    let newItems = this.shuffle(window.DATA.items)
    if (types.length > 0) {
      newItems = newItems.filter((i) => {
        return types.indexOf(i.collection) >= 0
      })
    }

    this.setState({
      allItems: newItems,
      items: newItems.slice(0, 12)
    })
  }

  render() {
    const masonryOpts = {
      itemSelector: '.' + imageStyle.Image,
      transitionDuration: 250,
      fitWidth: true
    }
    return (
      <div className={style.Images}>
      <header>
        <Home name={'Buildings'} size={25} onClick={() => {this.filter('buildings')}} />
        <User size={25} onClick={() => {this.filter('people')}} />
        <Document size={25} onClick={() => {this.filter('documents')}} />
        <Refresh size={25} onClick={() => {this.filter('all')}} />
      </header>
      <Masonry
        onImagesLoaded={this.handleImagesLoaded}
        options={masonryOpts}>
        {this.state.items.map((item) => {
          return (
            <Image
              key={'item-' + item.id}
              loading={this.state.loading}
              item={item} />
          )
        })}
      </Masonry>
      </div>
    )
  }
}

export default Images
