import React, { Component } from 'react'
import './VideoBlock.scss'

class VideoBlock extends Component {
  render () {
    return (
      <section className="video-block">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <h1>Our strong organization</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis, delectus dolorum esse, facilis
              impedit ipsam ipsum itaque maxime nihil, nisi optio pariatur quasi quibusdam quod sit soluta unde voluptate.
            </p>

            <button className="contact-us">Contact Us</button>
          </div>
          <div className="col-lg-6 d-flex align-middle">
            <div className="iframe-container embed-responsive embed-responsive-16by9">
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/BCr7y4SLhck" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default VideoBlock
