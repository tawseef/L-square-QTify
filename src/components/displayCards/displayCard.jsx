import React, { useEffect, useState } from "react";
import "./displayCard.css";
import Cards from "../cardFolder/card";
import Cardapi from "../apiComponents/cardAPI";
import Newalbumapi from "../apiComponents/newAlbumApi";
import { Grid } from "@mui/material";


function displayCards(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [topalbumData, setTopAlbumData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showCollapse, setShowCollapse] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newAlbum, setNewAlbum] = useState(false);
    
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( async ()=>{
        const topalbumDataCall= await Cardapi();
        setTopAlbumData(topalbumDataCall);

        const newAlbumDataCall= await Newalbumapi();
        setNewAlbum(newAlbumDataCall);
    },[]);

    
    return (
    <>
        <div className="headWrapper">
            <p className="album">Top Album</p>
            <p className="show" onClick={()=>{setShowCollapse(!showCollapse)}}> 
            {showCollapse ? <>Show All</> : <>Collapse</>}
            </p>
        </div>
            <div className="containerAlbum">
            {!topalbumData ? false :
                topalbumData.map((item)=>(
                    <Grid  key={item.id}>
                        <Cards data={item} type="album"/>
                    </Grid>
                ))
            }
            </div>
            <hr className="ruler"/>

            <div className="headWrapper">
            <p className="album">New Album</p>
            <p className="show" onClick={()=>{setShowCollapse(!showCollapse)}}> 
            {showCollapse ? <>Show All</> : <>Collapse</>}
            </p>
        </div>
            <div className="containerAlbum">
            {!newAlbum ? false :
                newAlbum.map((item)=>(
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