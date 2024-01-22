import React, {useState, useEffect} from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbarFolder/Navbar/navbar';
// import Hero from './components/heroSectionFolder/theSection/heroSection';
// import DisplayCard from "./components/displayCards/displayCard";
// import HomePage from './pages/HomePage/HomePage';
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from './components/apiComponents/api';
import { StyledEngineProvider } from '@mui/material';
// import data from "./sampleData.json";

function App() {
  const [data, setData] = useState({});
  const generateData=(key, source) =>{
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState, [key]:data};
      });
    });
  }

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  },[]);

  const {topAlbums = [], newAlbums = [] , songs = [] } = data;
  

  return (<>
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
      {/* <HomePage /> */}
      {/* <Hero /> */}
      {/* <DisplayCard /> */}
      </StyledEngineProvider>
  </>
  );
}

export default App;
