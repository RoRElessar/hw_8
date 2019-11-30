import React, { Component } from 'react'
import './Navigation.scss'

class Navigation extends Component {

  constructor (props) {
    super(props);
    this.state = {
      burgerIsOpen: false
    }
    this.openBurger = this.openBurger.bind(this)
  }

  openBurger () {
    this.setState({burgerIsOpen: !this.state.burgerIsOpen})
  }

  render () {
    return (
      <section className="navigation">
        <div className={this.state.burgerIsOpen ? 'burger-menu open' : 'burger-menu'}
             onClick={this.openBurger}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item"><a href="#">Home</a></li>
          <li className="navigation-item"><a href="#">Portfolio</a></li>
          <li className="navigation-item"><a href="#">About us</a></li>
          <li className="navigation-item"><a href="#">Contact</a></li>
        </ul>
      </section>
    )
  }
}

export default Navigation
