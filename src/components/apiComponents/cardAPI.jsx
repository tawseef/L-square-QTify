import axios from "axios";

async function cardApi(){
    try{
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        return response.data;
    }catch(e){
        return null;
    }

}

export default cardApi;