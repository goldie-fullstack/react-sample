import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import logoImage from '../assets/images/logo.png'
import ShoppingBag from '../assets/images/icon-shopping-bag.png'
import IconDollar from '../assets/images/icon-dollar.png'
 export default class Header extends Component {
  state = {
    isMenuOpen: false
  }

  onClickMenu = () => {
    let { isMenuOpen } = this.state

    isMenuOpen = !isMenuOpen
    this.setState({ isMenuOpen })
    console.log(isMenuOpen)
  }

  render() {
    
    const { isMenuOpen } = this.state

    return (
      <header className="header">
        <div className="fixed-header">
          <div className="container-custom">
            <div className="holder-logo"> 
              <img src={logoImage} alt="" className="image-logo"/>
            </div>

            <div className="holder-burger">
              <span className="icon-currency"><img src={IconDollar} alt="" className="image-shoppingbag"/></span>

              <span className="icon-bag"><img src={ShoppingBag} alt="" className="image-shoppingbag"/></span>
              
              <button className="js-openMenu button button-burger" onClick={this.onClickMenu}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          </div>
        </div>

        <div className={classnames('menu-collapse', {'open-menu': isMenuOpen })} >

          <div className="container-custom">
            <button className="button button-close" onClick={this.onClickMenu}></button>
            <ul className="list-wrapper menu-wrapper-links">
              <li className="menu-item"><Link to="/about" className="menu-link">ABOUT ARTUAL</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">EXHIBITION</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">ARTIST</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">SHOP</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">COLLABORATION</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">IN THE PRESS</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">VLOGS</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">CONTACT US</Link></li>
            </ul>

            <div className="holder-acctn">
              <p className="text-name">HELLO JOYCE</p>

              <ul className="list-wrapper menu-wrapper-acctn">
                <li className="acctn-item"><Link to="/editAcctn" className="acctn-link">EDIT ACCOUNT</Link></li>
                <li className="acctn-item"><Link to="/editAcctn" className="acctn-link">ADDRESS BOOK</Link></li>
                <li className="acctn-item"><Link to="/editAcctn" className="acctn-link">MY ORDERS</Link></li>
              </ul>

              <Link to="/logout" className="text-link">LOGOUT</Link>
            </div>

            <div className="holder-socialMedia">
              <Link to="/"><i className="fab fa-facebook-f"></i></Link>
              <Link to="/"><i className="fab fa-instagram"></i></Link>
              <Link to="/"><i className="fab fa-twitter"></i></Link>
            </div>
          </div>
        </div>
      </header>
    )
  }

  toggleSidenav() {
    var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
    this.setState({"showHideSidenav":css});
  }
}
