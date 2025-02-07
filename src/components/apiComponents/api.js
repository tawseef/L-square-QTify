import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do"

export const fetchTopAlbums = async () => {
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;
    }catch(e){
        return null;
    }
}

export const fetchNewAlbums = async () => {
    try{
        const response1 = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response1.data;
    }catch(e){
        return null;
    }
}

export const fetchSongs = async () => {
    try{
        const response2 = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response2.data;
    }catch(e){
        return null;
    }
}

export const fetchFilters = async () => {
    try{
        const response3 = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        return response3.data;
    }catch(e){
        return null;
    }
}



// Fetch Songs and Fetch Filters 