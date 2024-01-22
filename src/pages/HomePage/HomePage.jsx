import React from "react";
import "./Homepage.css";
import Hero from "../../components/heroSectionFolder/theSection/heroSection";
import Section from "../../components/SectionFolder/Section";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../components/apiComponents/api";

function HomePage(){
    const {data} = useOutletContext();
    const {newAlbums, topAlbums, songs} = data;
    return <>
        <Hero />
        <div className="wrapper2">
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        </div>
        {/*  */}
        <hr />
        <div>
        <Section title="Songs" filterSource={fetchFilters} data={songs} type="song" />
        </div>
        <hr />
        {/*  */}
    </>; 
    

}

export default HomePage;