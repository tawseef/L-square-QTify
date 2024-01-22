import React from "react";
import Hero from "../../components/heroSectionFolder/theSection/heroSection";
import Section from "../../components/SectionFolder/Section";
import { useOutletContext } from "react-router-dom";

function HomePage(){
    const {data} = useOutletContext();
    const {newAlbums, topAlbums} = data;
    return <>
        <Hero />
        <div className="wrapper2">
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        </div>
    </>; 
    

}

export default HomePage;