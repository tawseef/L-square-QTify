import React, {useEffect, useState} from "react";
import { CircularProgress } from "@mui/material";
import Card from "../cardFolder/card";
import Carousel from "../carouselFolder/Carousel";
import Filters from "../Filters/Filters";
import "./Section.css";

function Section({ title, data, filterSource, type}){

    const [theToggleBtn, setTheToggleBtn] = useState(true);
    const [filters, setFilters] = useState([{key:"all", label:"All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    
    const handleToggle=()=>{
        setTheToggleBtn((prevState)=>!prevState);
    }

    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                setFilters([...filters, ...response.data]);
            })
        }
    }, []);

    const showFilters = filters.length > 1;

    const cardsToRender = data.filter((card)=> showFilters && selectedFilterIndex !== 0 ? card.genre.key === filters[selectedFilterIndex].key : card);

    return (
        <div>
            <div className="header">
                <h3 className="text">{title}</h3>
                
                { title=== "Songs" ? false : <><h4 className="toggleText" onClick={handleToggle}>{ !theToggleBtn ? "Collapse All" : "Show All" }</h4></>}

                </div>
                {
                    showFilters && (
                        <div className="filterWrapper">
                            <Filters filters={filters}
                            selectedFilterIndex = {selectedFilterIndex} 
                            setSelectedFilterIndex={setSelectedFilterIndex} />
                        </div>
                    )
                }
                
                {/* <h4 className="toggleText" onClick={handleToggle}>{ !theToggleBtn ? "Collapse All" : "Show All" }</h4> */}

            {data.length===0 ? <CircularProgress/> : (
            <div className="cardWrapper" >
                {!theToggleBtn ? (
                <div className="wrapper" >
                    {cardsToRender.map((ele)=>(<Card data={ele} type={type} />))}
                </div>
                ) :
                <Carousel data={cardsToRender} renderComponent={(data)=> <Card data={data} type={type} /> } />
                }
            </div>) }
        </div>
    );

}

export default Section;












