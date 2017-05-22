import React, { Component } from 'react'
import 'normalize.css'

import Banner from './Banner/index'

class App extends Component {
    render () {
        return (
            <div>
                <Banner/>
                <p>hello?, how are you?</p>
            </div>
        )
    }
}

export default App