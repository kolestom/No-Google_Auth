import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const ConfirmPage = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const urlSearchParams = new URLSearchParams(window.location.search)
    const code = urlSearchParams.get("code")
    const username = urlSearchParams.get("username")
    
    
    const sendConfirmation = async () => {
        try {
            const resp = await axios.post('http://localhost:1122/api/users/confirm', {
                code,
                username,
                date: new Date().getTime()
            })
            console.log(resp.status);
            setTimeout(()=>{
                setLoading(false)
            }, 2000)
            setTimeout(()=>{
                navigate('/login')
            }, 2000)
        } catch (err) {
            alert('An error has occurred. Please, sign in again!')
            navigate('/signup')
        }
    }
    
    useEffect(()=>{
        sendConfirmation()
    },[])

    return ( 
        <div>
            <h1>Confirm page</h1>
            {loading ? <h2>Loading</h2> : <h2>Confirmation received</h2>}
        </div>
     );
}
 
export default ConfirmPage;