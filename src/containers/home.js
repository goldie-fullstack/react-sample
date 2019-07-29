import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { Navigation } from 'swiper/dist/js/swiper.esm'
// import { Link } from 'react-router-dom'

import '../stylesheets/main.scss'
import swiperImage from '../assets/images/home-banner.png'
import ProductImgOne from '../assets/images/product-one.png'
import ProductImgTwo from '../assets/images/product-two.png'
import ProductImgThree from '../assets/images/product-three.png'
import ProductImgFour from '../assets/images/product-four.png'
import GreenArrow from '../assets/images/icon-green-arrow.png'
import GreenBag from '../assets/images/icon-green-bag.png'


export default class Home extends Component { 
  render() {   
    const params = {
      modules: [Navigation],
      pagination: {
        el: '.swiper-pagination',
      },
      spaceBetween: 0
    }
    
     return (
      <main className="homepage">
        <div className="section-banner">
          <Swiper {...params}>
            <div className="swiper-slide">
              <img src={swiperImage} alt="" className="swiper-image"/>

              <div className="swiper-content">
                <div className="container-custom">
                  <p className="heading">IMPOSSIBLE<span className="heading-thin">POSSIBILITIES</span></p>

                  <a href="/virtual" className="swiper-link">START VIRTUAL TOUR</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={swiperImage} alt="" className="swiper-image"/>

               <div className="swiper-content">
                <div className="container-custom">
                  <p className="heading">IMPOSSIBLE<span className="heading-thin">POSSIBILITIES</span></p>

                  <a href="/virtual" className="swiper-link">START VIRTUAL TOUR</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={swiperImage} alt="" className="swiper-image"/>

              <div className="swiper-content">
                <div className="container-custom">
                  <p className="heading">IMPOSSIBLE<span className="heading-thin">POSSIBILITIES</span></p>

                  <a href="/virtual" className="swiper-link">START VIRTUAL TOUR</a>
                </div>
              </div>
            </div>
          </Swiper>
        </div>

        <div className="section-products">
          <div className="container-custom">
            <div className="sidebar-links">
              <p className="heading">The <span className="heading-thin">Shop</span></p>

              <ul className="side-wrapper">
                <li className="side-item">
                  <a href="/book" className="side-link">Books</a>
                </li>
                <li className="side-item">
                  <a href="/book" className="side-link">Prints</a>
                </li>
                <li className="side-item">
                  <a href="/book" className="side-link">Goodies</a>
                </li>
                <li className="side-item">
                  <a href="/book" className="side-link">Artist Edition</a>
                </li>
              </ul>
            </div>

            <div className="popular-products">
              <p className="heading">MOST <span className="heading-thin">WANTED</span></p>

              <div className="product-wrapper">
                <div className="product-holder">
                  <div className="product-image-holder">
                    <img src={ProductImgOne} alt="Product" />
                  </div>
                  <p className="product-title">Athier Mousawi</p>
                  <p className="product-description">Improbable Possibilities</p>
                  <div className="action-buttons">
                    <a href="/GreenArrow"><img src={GreenArrow} alt="Arrow icon" /></a>
                    <a href="/GreenBag"><img src={GreenBag} alt="Bag icon" /></a>
                  </div>
                </div>

                <div className="product-holder">
                  <div className="product-image-holder">
                    <img src={ProductImgTwo} alt="Product" />
                  </div>
                  <p className="product-title">Athier Mousawi</p>
                  <p className="product-description">Improbable Possibilities</p>
                  <div className="action-buttons">
                    <a href="/GreenArrow"><img src={GreenArrow} alt="Arrow icon" /></a>
                    <a href="/GreenBag"><img src={GreenBag} alt="Bag icon" /></a>
                  </div>
                </div>

                <div className="product-holder">
                  <div className="product-image-holder">
                    <img src={ProductImgThree} alt="Product" />
                  </div>
                  <p className="product-title">Athier Mousawi</p>
                  <p className="product-description">Improbable Possibilities</p>
                  <div className="action-buttons">
                    <a href="/GreenArrow"><img src={GreenArrow} alt="Arrow icon" /></a>
                    <a href="/GreenBag"><img src={GreenBag} alt="Bag icon" /></a>
                  </div>
                </div>

                <div className="product-holder">
                  <div className="product-image-holder">
                    <img src={ProductImgFour} alt="Product" />
                  </div>
                  <p className="product-title">Athier Mousawi</p>
                  <p className="product-description">Improbable Possibilities</p>
                  <div className="action-buttons">
                    <a href="/GreenArrow"><img src={GreenArrow} alt="Arrow icon" /></a>
                    <a href="/GreenBag"><img src={GreenBag} alt="Bag icon" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}