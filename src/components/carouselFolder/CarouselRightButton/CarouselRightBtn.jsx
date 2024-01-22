import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import "./carouselRightBtn.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
// import RightArrow from "../../../assets/RightArrow.svg";
// import RightArrow from "./rightArrowBtn";

function CarouselRightBtn(){
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        })
    },[]);

    return (
        <div className="rightNav">
            {!isEnd && <RightArrow onClick={()=> swiper.slideNext()} />}
        </div>

    );
}

export default CarouselRightBtn;