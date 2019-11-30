import React, { Component } from 'react'
import './OurServices.scss'
import managementImage from '../../assets/images/Settings.png'
import uiUxDesignImage from '../../assets/images/Pencil.png'
import logoBrandingImage from '../../assets/images/Diamond.png'
import animationImage from '../../assets/images/Truck.png'

class OurServices extends Component {
  render () {
    return (
      <div className="app-container">
        <section className="our-services">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="general">
                <h2>Do you know we can provide for you?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, consequatur eos laborum quaerat quidem
                  quo?
                  A consequuntur corporis error est illo inventore, molestiae pariatur praesentium quae recusandae rem
                  soluta tenetur!
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="service">
                    <img src={managementImage} alt="management" className="service-icon"/>
                    <h4 className="service-title">Management</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dolore dolorem error
                      impedit
                      nisi obcaecati officiis, praesentium sequi. Ab accusamus amet dignissimos dolores eligendi in odio
                      porro quibusdam rem.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service">
                    <img src={uiUxDesignImage} alt="ui/ux design" className="service-icon"/>
                    <h4 className="service-title">UI/UX Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dolore dolorem error
                      impedit
                      nisi obcaecati officiis, praesentium sequi. Ab accusamus amet dignissimos dolores eligendi in odio
                      porro quibusdam rem.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service">
                    <img src={logoBrandingImage} alt="logo/branding" className="service-icon"/>
                    <h4 className="service-title">Logo / Branding</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dolore dolorem error
                      impedit
                      nisi obcaecati officiis, praesentium sequi. Ab accusamus amet dignissimos dolores eligendi in odio
                      porro quibusdam rem.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service">
                    <img src={animationImage} alt="animation" className="service-icon"/>
                    <h4 className="service-title">Animation</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dolore dolorem error
                      impedit
                      nisi obcaecati officiis, praesentium sequi. Ab accusamus amet dignissimos dolores eligendi in odio
                      porro quibusdam rem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default OurServices
