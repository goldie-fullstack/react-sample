import React, { Component } from 'react'
import ReactIdSwiper from 'react-id-swiper'
// import { Link } from 'react-router-dom'

import '../stylesheets/main.scss'

export default class Home extends Component { 
  render() {   
     return (
      <main className="homepage">
        <div className="section-banner">
          <ReactIdSwiper>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
          </ReactIdSwiper>
        </div>
      </main>
    )
  }
}