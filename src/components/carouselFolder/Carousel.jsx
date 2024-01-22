import React, { useEffect } from "react";
import "./carousel.css";
import { Navigation } from "swiper";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import CarouselLeftButton from "./CarouselLeftButton/CarouselLeftBtn";
import CarouselRightButton from "./CarouselRightButton/CarouselRightBtn";
 

const Controls = ({ data }) =>{
    const swiper = useSwiper();

    useEffect(()=>{
        swiper.slideTo(0);
    }, [data]);
    return <></>;
}


function Carousel({data, renderComponent}){
    return (
        <div className="wrapper1">
            
            <Swiper 
            style={{padding: "0px 20px", display:"flex"}}
            initialSlide={0}
            modules={{Navigation}}
            slidesPerView={"auto"}
            spaceBetween={40}
            allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftButton />
                <CarouselRightButton />
                {data.map((ele)=>(
                    <SwiperSlide >
                        {renderComponent(ele)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>        

);
}

export default Carousel;