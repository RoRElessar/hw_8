import React, { Component } from 'react'
import './ContactInformation.scss'

class ContactInformation extends Component {
  render () {
    return (
      <section className="contact-information">
        <h2>Get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iure repellat voluptas! Ab architecto,
          assumenda blanditiis exercitationem facere impedit incidunt maxime nostrum placeat praesentium quas
          repudiandae rerum, sed tempora, unde?
        </p>

        <div className="row">
          <div className="col-lg-7">
            <form action="">
              <div className="form-group">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Your Mail"/>
              </div>
              <textarea placeholder="Type your message"/>
              <button type="submit">Send message</button>
            </form>
          </div>
          <div className="col-lg-5"></div>
        </div>
      </section>
    )
  }
}

export default ContactInformation
