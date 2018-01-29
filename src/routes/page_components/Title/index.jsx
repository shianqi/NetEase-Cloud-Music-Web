import React, { PureComponent } from 'react'
import Style from './index.css'

class Title extends PureComponent {
  render () {
    const {
      rightButtonClick,
      rightButton,
      title,
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
