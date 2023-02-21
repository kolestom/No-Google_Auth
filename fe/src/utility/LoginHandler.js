import axios from "axios";
const LoginHandler = async (username, password) => {
        try {

            const response = await axios.post(`http://localhost:1122/api/users/login`,
            {
                username,
                password
            }
            )
            console.log(response.status);
            return response.status;
        } catch (err) {
            console.log(err.response.status);
            return err.response.status
        }
    
    
}
 
export default LoginHandler;