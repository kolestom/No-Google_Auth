import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUpHandler from "../utility/SignUpHandler";
import CheckUsername from "../utility/CheckUsername";
import CheckEmail from "../utility/CheckEmail";
import './Signup.css'


const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false)
    const [IsDisabled, setIsDisabled] = useState(true);

    const navigate = useNavigate()

    useEffect(()=>{
        (!usernameError && !emailError) ? setIsDisabled(false) : setIsDisabled(true) 
        
    },[usernameError, emailError])
    
    const usernameHandler = async(e) =>{
        setUsername(e)
        setUsernameError(await CheckUsername(e)) 
    }

    const emailHandler = async(e) => {
        setEmail(e)
        setEmailError(await CheckEmail(e))
    }

    return ( 
        <>
            <h2>SignUp Page</h2>
            <div id="signup-input">
                <input type="text" placeholder="username" value={username} onChange={(e) => usernameHandler(e.target.value)}/>
                <span style={{display: usernameError ? 'block' : 'none'}}>Username already in use</span>
                <input type="text" placeholder="email" value={email} onChange={(e) => emailHandler(e.target.value)}/>
                <span style={{display: emailError ? 'block' : 'none'}}>Email already in use</span>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={() => {
                    SignUpHandler(username, email, password)
                    setUsername('')
                    setEmail('')
                    setPassword('')
                    }} disabled={IsDisabled}>Sign Up</button>
            </div>
            <div>
                <button onClick={()=>{navigate('/login')}}>To Login</button>
                <button onClick={()=>{navigate('/')}}>To Home</button>
            </div>
        </>
     );
}
 
export default SignupPage;