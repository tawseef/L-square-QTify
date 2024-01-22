import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import "./carouselLeftBtn.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
// import LeftArrow from "../../../assets/LeftArrow.svg";


function CarouselLeftBtn(){
    
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        })
    },[]);

    return (
        <div className="leftNav">
            {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()} />}
            {/* {!isBeginning && <LeftArrow />} */}
        </div>

    );
}

export default CarouselLeftBtn;