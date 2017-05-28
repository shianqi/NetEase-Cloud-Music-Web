import React, { Component } from 'react'
import 'normalize.css'

import Footer from './Footer'
import Banner from './Banner/index'
import MainWindow from './MainWindow'
import Style from './App.css'

class App extends Component {
    render () {
        return (
            <div className={Style.app}>
                <Footer/>
                <MainWindow />
                <Banner/>
            </div>
        )
    }
}

export default App