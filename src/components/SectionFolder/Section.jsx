import React, {useState} from "react";
import { CircularProgress } from "@mui/material";
import Card from "../cardFolder/card";
import Carousel from "../carouselFolder/Carousel";
import "./Section.css";

function Section({ title, data, type}){

    const [theToggleBtn, setTheToggleBtn] = useState(true);
    const handleToggle=()=>{
        setTheToggleBtn((prevState)=>!prevState);
    }

    return (
        <div>
            <div className="header">
                <h3 className="text">{title}</h3>
                <h4 className="toggleText" onClick={handleToggle}>{ !theToggleBtn ? "Collapse All" : "Show All" }</h4>
            </div>

            {data.length===0 ? <CircularProgress/> : (
            <div className="cardWrapper" >
                {!theToggleBtn ? (
                <div className="wrapper" >
                    {data.map((ele)=>(<Card data={ele} type={type} />))}
                </div>
                ) :
                <Carousel data={data} renderComponent={(data)=> <Card data={data} type="album" /> } />
                }
            </div>) }
        </div>
    );

}

export default Section;












