import React, { Component } from 'react'
import './Subscribe.scss'

class Subscribe extends Component {
  render () {
    return (
      <section className="subscribe-block">
        <h2>Design tips, tricks, and freebies. Delivered weekly</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>

        <form action="">
          <input type="email" placeholder="Email Address..."/>
          <button type="submit">Subscribe</button>
        </form>
      </section>
    )
  }
}

export default Subscribe
