import React, { Component } from 'react'
import './Header.css'
import Navigation from './navigation/Navigation'
import VideoBlock from './video-block/VideoBlock'

class Header extends Component {
  render () {
    return (
      <div>
        <Navigation/>
        <VideoBlock/>
      </div>
    )
  }
}

export default Header
