import axios from "axios";

const ResetPassword = async (newPassword,username,code) => {
        try {

            const response = await axios.post(`http://localhost:1122/api/users/password`,
            {
                newPassword,
                username,
                code,
                date: new Date().getTime()             
            }
            )
            console.log(response)
            return response.status;

        } catch (err) {
            console.log(err.response.status);
            return err.response.status
        }
    
}
 
export default ResetPassword;