import axios from "axios";

const CheckSignUpUsername = async(username) => {
    const response = await axios.post(`http://localhost:1122/api/users/check_username`,
    {
        username
    })
    return response.data;
}
 
export default CheckSignUpUsername;