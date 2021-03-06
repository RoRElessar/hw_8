import React, { Component } from 'react'
import './OurProducts.scss'

class OurProducts extends Component {
  render () {
    return (
      <section className="our-products">
        <div className="app-container">
          <h2>Feature products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque error explicabo in ipsam itaque
            mollitia neque obcaecati odio, placeat qui quis reprehenderit. Commodi dolor exercitationem fugiat quam qui
            repellendus!
          </p>

          <div className="filters">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">All</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Print template</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Web template</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">User interface</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Moc-up</a>
          </div>

          <div className="products">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-sm">
                <div className="product"/>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-sm">
                <div className="product"/>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-sm">
                <div className="product"/>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-sm">
                <div className="product"/>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-sm">
                <div className="product"/>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-sm">
                <div className="product"/>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-sm">
                <div className="product"/>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-sm">
                <div className="product"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default OurProducts
