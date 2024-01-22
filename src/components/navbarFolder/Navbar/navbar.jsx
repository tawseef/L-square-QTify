import React from "react";
import Logo from "../logo/logo";
import Search from "../searchbox/searchbox";
import Button from "../button/button";
import "./navbar.css" 
// import { Link } from "react-router-dom";

function Navbar(){
    return (
    <nav className="navbar">
        <a href="/">
            <Logo/>
        </a>
        <Search placeholder="Search a album of your choice "/>
        <Button>Give Feedback</Button>
    </nav>)
}

export default Navbar;