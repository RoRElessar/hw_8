import React, { Component } from 'react'
import './Header.scss'
import Navigation from './navigation/Navigation'
import VideoBlock from './video-block/VideoBlock'

class Header extends Component {
  render () {
    return (
      <section className="header">
        <div className="app-container">
          <Navigation/>
          <VideoBlock/>
        </div>
      </section>
    )
  }
}

export default Header
