import axios from "axios";

const PrivPubHandler = async(ending, token, setLoggedInUser, setToken) => {
    if (ending === "public") {
        const response = await axios.get(`http://localhost:1122/api/words/${ending}`)
    
        console.log(response.data[0].content);
        return response.data[0].content

    } else {
        try {
            const response = await axios.get(`http://localhost:1122/api/words/${ending}`,{
                headers: {
                    'Authorization': `Bearer: ${token}`
                }
            })
            console.log(response.data[0].content);
            return response.data[0].content
        } catch (error) {
            console.log(error.message)
            alert("Session expired. Please, log in again.")
            setLoggedInUser('')
            setToken('')
        }
    }

}
 
export default PrivPubHandler;