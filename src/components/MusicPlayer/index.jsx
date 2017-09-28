import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const selector = (state) => {
    return {
        musicPlayer: state.musicPlayer
    }
}

class MusicPlayer extends Component {
    render() {
        const { musicPlayer={} } = this.props
        const audio = document.getElementById('musicPlayer')
        const {
            src='',
            playing
        } = musicPlayer

        if(audio&&playing) {
            audio.play()
        }else if(audio) {
            audio.pause()
        }

        return (
            <div>
                <audio id="musicPlayer" src={ src }></audio>
            </div>
        )
    }
}

export default withRouter(connect(selector)(MusicPlayer))
