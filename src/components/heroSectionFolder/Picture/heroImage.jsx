import React from "react";
import "./hero.css";
import Pic from "../../../assets/headphone.svg";

export default function heroImage(){
    return (<img src={Pic} alt="heroImage" className="heroPicture"/>);
}