import axios from "axios";

const CheckSignUpEmail = async(email) => {
    const response = await axios.post(`http://localhost:1122/api/users/check_email`,
    {
        email
    })
    return response.data;
}
 
export default CheckSignUpEmail;