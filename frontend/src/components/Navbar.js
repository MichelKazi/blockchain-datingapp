import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/Nav.css"

export default class NavBar extends Component {
  state= {
    btnClick: 'unclicked'
  }

  navAnimate = (e) => {
    this.setState({
      btnClick: 'clicked'
    })
  }

  render() {
  
    // if(this.state.btnClick === 'clicked'){
    //   link = {
    //     width: "50px",
    //     padding: "8px",
    //     margin: "6px 12px 6px",
    //     background: "antiquewhite",
    //     border: "1px groove black",
    //     color: "black"
    //   }
    // }
    return (
      <div className="navbar">
          
          
        <div className="buttons">
          <NavLink to="/" className="buttons">
            Home
          </NavLink>
          <NavLink to="/about" className="buttons">
            Find People
          </NavLink>
          <NavLink to="/profile" className="buttons">
            Profile
          </NavLink>
        </div>
      </div>
    );
  }
}