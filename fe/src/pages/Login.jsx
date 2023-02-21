import PrivPubHandler from '../utility/PrivPubHandler'
import LoginHandler from '../utility/LoginHandler';
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useState, useEffect } from 'react';

const LoginPage = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');


    const sendLogin = () => {
        LoginHandler(username, password)
    }
    return ( 
        <div id='login-container'>

            <h2>Login Page</h2>
            <div>
                <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button onClick={sendLogin}>Log in</button>
            </div>
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