import React, { Component } from 'react'
import './Footer.scss'
import '../../assets/stylesheets/fontawesome/font-awesome.css'

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="copyright">
          <p>&copy; Copyright @juanaed 2016, All rights reserved </p>
        </div>
        <div className="social-block">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="twitter">
            <i className="fa fa-twitter"/>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="linkedin">
            <i className="fa fa-linkedin"/>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="google-plus">
            <i className="fa fa-google-plus"/>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="facebook">
            <i className="fa fa-facebook"/>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
