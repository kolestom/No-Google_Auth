import PrivPubHandler from '../utility/PrivPubHandler'
import { useNavigate } from "react-router-dom";
import './Login.css'

const LoginPage = () => {
    const navigate = useNavigate()
    return ( 
        <div id='login-container'>

            <h2>Login Page</h2>
            <div>
                <button onClick={()=>{PrivPubHandler('public')}}>Get public</button>
                <button onClick={()=>{PrivPubHandler('private')}}>Get private</button>
            </div>
            <div>
                <button onClick={()=>{navigate('/signup')}}>To Sign up</button>
                <button onClick={()=>{navigate('/')}}>To Home</button>
            </div>
        </div>
     );
}
 
export default LoginPage;