import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Images from '../containers/Images'

import style from './App.css'

class App extends Component {

  render() {
    return (
      <div className={style.App} id="App">
        <Header />
        <Route exact path="*" component={Images} />
        <Footer />
      </div>
    )
  }

}

export default App
