import axios from "axios";

const PrivPubHandler = async(ending) => {
    const response = await axios.get(`http://localhost:1122/api/${ending}`)
    console.log(response.data[0].content);
    return response.data[0].content
}
 
export default PrivPubHandler;