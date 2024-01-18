import React, { useEffect, useState } from "react";
import "./displayCard.css";
import Cards from "../cardFolder/card";
import Cardapi from "../apiComponents/cardAPI";
import { Grid } from "@mui/material";


function displayCards(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cardData, setCardData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showCollapse, setShoeCollapse] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( async ()=>{
        const cardDataCall= await Cardapi();
        setCardData(cardDataCall);
    },[]);

    
    return (
    <>
        <div className="headWrapper">
            <p className="album">Top Album</p>
            <p className="show" onClick={()=>{setShoeCollapse(!showCollapse)}}> 
            {showCollapse ? <>Show All</> : <>Collapse</>} 
            </p>
        </div>
            <div className="containerAlbum">
            {!cardData ? false :
                cardData.map((item)=>(
                    <Grid  key={item.id}>
                        <Cards data={item} type="album"/>
                    </Grid>
                ))
            }
            </div>
            <hr className="ruler"/>
    </>
    );
}

export default displayCards;