import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { Navigation } from 'swiper/dist/js/swiper.esm'
// import { Link } from 'react-router-dom'

import '../stylesheets/main.scss'
import swiperImage from '../assets/images/home-banner.png'


export default class Home extends Component { 
  render() {   
    const params = {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }
    
     return (
      <main className="homepage">
        <div className="section-banner">
          <Swiper {...params}>
            <div className="swiper-slide">
              <img src={swiperImage} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={swiperImage} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={swiperImage} alt="" />
            </div>
          </Swiper>
        </div>
      </main>
    )
  }
}