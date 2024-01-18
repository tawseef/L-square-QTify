import axios from "axios";

async function newAlbumApi(){
    try{
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
        return response.data;
    }catch(e){
        return null;
    }

}

export default newAlbumApi;