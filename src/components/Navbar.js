import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({data}) => {

    return (
        <div className="navbar">
             <div className="right-links">
                <span>Shopping Cart</span>
            </div>
            <div className="left-links">
                <a href="/">Home Page</a>
                <NavLink to="/cart" state= {data}>Cart Page</NavLink>
            </div>
        </div>
    )
}

export default Navbar;