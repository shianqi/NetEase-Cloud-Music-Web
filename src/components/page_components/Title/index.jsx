import React, { Component } from 'react'
import Style from './Title.css'

class Title extends Component {
    render() {
        const {
            rightButtonClick,
            rightButton,
            title
        } = this.props

        return (
            <h3 className={ Style['title'] }>
                {title}
                <span
                    className={ Style['right-button'] }
                    onClick={rightButtonClick}
                >
                    {rightButton}
                </span>
            </h3>
        )
    }
}

export default Title
