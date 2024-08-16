import React from "react";
import { NavLink } from "react-router-dom";
// import "./BottomNavBar.css";

const BottomNavBar = () => {
  return (
    <div className="bottom-nav-bar">
      <NavLink to="/home" exact activeClassName="active" className="nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/icons/hom.svg`}
          alt="Home"
          className="nav-icon"
        />
        <span>Home</span>
      </NavLink>
      <NavLink to="/predictions" activeClassName="active" className="nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/icons/sport.svg`}
          alt="Predictions"
          className="nav-icon"
        />
        <span>Predictions</span>
      </NavLink>
      <NavLink
        to="/ai-predictions"
        activeClassName="active"
        className="nav-item"
      >
        <img
          src={`${process.env.PUBLIC_URL}/icons/ai.svg`}
          alt="AI Predictions"
          className="nav-icon"
        />
        <span>AI Predictions</span>
      </NavLink>
      <NavLink to="/support" activeClassName="active" className="nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/icons/support.svg`}
          alt="Support"
          className="nav-icon"
        />
        <span>Support</span>
      </NavLink>
      <NavLink to="/menu" activeClassName="active" className="nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/icons/burger.svg`}
          alt="Menu"
          className="nav-icon"
        />
        <span>Menu</span>
      </NavLink>
    </div>
  );
};

export default BottomNavBar;
