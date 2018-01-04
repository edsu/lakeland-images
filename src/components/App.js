import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Counter from '../containers/Counter'

import style from './App.css'

const App = () => {
  return (
    <div className={style.App} id="App">
      <Header />
      <Route exact path="/" component={Counter} />
      <Footer />
    </div>
  )
}

export default App
