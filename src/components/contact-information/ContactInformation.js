import React, { Component } from 'react'
import './ContactInformation.scss'

class ContactInformation extends Component {
  render () {
    return (
      <section className="contact-information">
        <h2>Get in touch</h2>
        <p className="block-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iure repellat voluptas! Ab architecto,
          assumenda blanditiis exercitationem facere impedit incidunt maxime nostrum placeat praesentium quas
          repudiandae rerum, sed tempora, unde?
        </p>

        <div className="form-with-contact-info">
          <div className="left-block">
            <form action="">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" placeholder="Name"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email" placeholder="Your Mail"/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Type your message"/>
              </div>
              <div className="form-group mb-0">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
          <div className="right-block">
            <div className="contact-info-container">
              <div className="contact-info">
                <h2>Contact info</h2>
                <p className="address">Jalalabad 24 / A, Ambaarkhana, Sylhet, Bangladesh</p>
                <p className="email">
                  <a href="mailto:redwan@deviserweb.com">redwan@deviserweb.com</a>
                </p>
                <p className="phone">
                  <a href="tel:+8801761746373">(+88) 017 617 46373</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactInformation
