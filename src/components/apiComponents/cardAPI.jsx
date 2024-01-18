import axios from "axios";

async function cardApi(){
    try{
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        console.log("CardAPI")
        return response.data;
    }catch(e){
        console.log("Catch")
        return null;
    }

}

export default cardApi;