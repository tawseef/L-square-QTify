import React from "react";
import HeroImage from "../Picture/heroImage"
import "./heroSection.css";

export default function hero(){
    return (
    <div className="hero container">
    <p className="heroText">100 Thousand Songs, ad-free<br />Over thousands podcast episodes</p>
    <HeroImage />
    </div>
    );
}