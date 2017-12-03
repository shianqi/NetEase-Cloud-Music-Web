import React, { Component } from 'react'

import Footer from './Footer'
import Banner from './Banner/index'
import MusicPlayer from './MusicPlayer'
import MainWindow from './MainWindow'
import Login from './Login'

import Style from './App.css'

class App extends Component {
  render() {
    return (
      <div className={Style.app}>
        <Footer/>
        <MainWindow/>
        <MusicPlayer/>
        <Banner/>
        <Login/>
      </div>
    )
  }
}

export default App
