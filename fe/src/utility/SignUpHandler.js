import axios from "axios";
const SignUpHandler = async (username, email, password) => {
    if (username.length < 1 || email.length < 1 || password.length < 1) {
        alert('Please, provide valid input')
    } else {
        
        const response = await axios.post(`http://localhost:1122/api/users/signup`,
        {
            username,
            email,
            password
        }
        )
        console.log(response);
        return response;
    }
    
}
 
export default SignUpHandler;