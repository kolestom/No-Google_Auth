import PrivPubHandler from '../utility/PrivPubHandler'
import LoginHandler from '../utility/LoginHandler';
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useState, useEffect, useContext } from 'react';
import jwt_decode from "jwt-decode";
import userContext from '../contexts/UserContext';


const LoginPage = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const {token, setToken, loggedInUser, setLoggedInUser} = useContext(userContext)
    

    const sendLogin = async() => {
        const resp = await LoginHandler(username, password)
        if(resp.status !== 200) {
            setUsername('')
            setPassword('')
            return alert('Login failed')
        }
        setToken(resp.data)
    }

    const logOut = () => {
        setLoggedInUser('')
        setToken('')
        setUsername('')
        setPassword('')
    }

    const privHandler = () =>{
        PrivPubHandler('private', token, setLoggedInUser, setToken)
    }

    useEffect(()=> {
        if (token !== "") {
            setLoggedInUser(jwt_decode(token))
        }
    },[token])
    // console.log('token', token);
    // console.log('LoggedinUser', loggedInUser);


    return ( 
        <div id='login-container'>

            <h2>Login Page</h2>
            {loggedInUser && <h3>Hi, {loggedInUser.username}</h3>}
            <div>
                <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button onClick={sendLogin}>Log in</button>
                <button style={{display: loggedInUser ? 'inline' : 'none'}} onClick={logOut}>Log out</button>
            </div>
            <div>
                <button onClick={()=>{PrivPubHandler('public', token)}}>Get public</button>
                <button style={{display: loggedInUser ? 'inline' : 'none'}} onClick={privHandler}>Get private</button>
            </div>
            <div>
                <button onClick={()=>{navigate('/signup')}}>To Sign up</button>
                <button onClick={()=>{navigate('/')}}>To Home</button>
                <button style={{display: loggedInUser ? 'none' : 'inline'}} onClick={()=>{navigate('/forgot')}}>Forgot password</button>
            </div>
        </div>
     );
}
 
export default LoginPage;