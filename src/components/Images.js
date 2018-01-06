import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  }

  componentWillMount() {
    this.props.filter([])
    this.setState({
      loading: true
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
      this.props.displayMore()
    }
  }

  handleImagesLoaded() {
    this.setState({
      loading: false
    })
  }

  render() {
    const masonryOpts = {
      itemSelector: '.' + imageStyle.Image,
      transitionDuration: 250,
      fitWidth: true
    }
    const displayedItems = this.props.items.slice(0, this.props.position)
    return (
      <div className={style.Images}>
      <header>

        <span title="Houses">
          <Home size={25} onClick={() => {
            this.props.filter(['Photos Houses'])
          }} />
        </span>

        <span title="People">
          <User size={25} onClick={() => {
            this.props.filter(['Photos People'])
          }} />
        </span>

        <span title="Documents">
          <Document size={25} onClick={() => {
            this.props.filter(['Other Documents', 'Maps', 'Property Descriptions'])
          }} />
        </span>

        <span title="All Items">
          <Refresh size={25} onClick={() => {
            this.props.filter([])
          }} />
        </span>

      </header>
      <Masonry
        onImagesLoaded={this.handleImagesLoaded}
        options={masonryOpts}>
        {displayedItems.map((item) => {
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

Images.propTypes = {
  filter: PropTypes.func,
  displayMore: PropTypes.func,
  items: PropTypes.array,
  position: PropTypes.number
}

export default Images
