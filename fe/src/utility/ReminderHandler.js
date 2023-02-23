import axios from "axios";

const ReminderHandler = async (username) => {
        try {

            const response = await axios.post(`http://localhost:1122/api/users/reset`,
            {
                username
            }
            )
            return response.data;

        } catch (err) {
            console.log(err.response.status);
            return err.response.status
        }
    
    
}
 
export default ReminderHandler;