import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

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
      <div>
        <button className="js-openMenu button button-modal" onClick={this.onClickMenu}>Open Menu</button>

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
      </div>
    )
  }

  toggleSidenav() {
    var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
    this.setState({"showHideSidenav":css});
  }
}
