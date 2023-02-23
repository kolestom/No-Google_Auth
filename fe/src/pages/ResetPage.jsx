import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ResetPassword from "../utility/ResetHandler"


const Reset = ()=>{
    const navigate = useNavigate()
    const[newPassword,setNewPassword]=useState("")
    const urlSearchParams = new URLSearchParams(window.location.search)
    const code = urlSearchParams.get("code")
    const username = urlSearchParams.get("username")

    const sendNewPassword = async ()=>{
        
            const res = await ResetPassword(newPassword,username,code)
            if (res === 200) {
                alert('Password has been changed')
                navigate("/login")
            } else {
                alert('An error has occurred. Please, try it again!')
                navigate("/forgot")
            }
    }

    return(
        <div id='login-container'>
        <h2>Reset Page</h2>
        <div>
            <input type="password" placeholder='new password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
            <button onClick={sendNewPassword}>Reset password</button>
            <button onClick={()=>{navigate('/login')}}>To Login</button>
        </div>
    </div>
    )
}

export default Reset