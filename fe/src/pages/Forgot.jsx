import { useState } from "react"
import ReminderHandler from "../utility/ReminderHandler"


const Forgot = ()=>{
    const[username,setUsername]=useState("")

    const sendReminder = async ()=>{
        const res = await ReminderHandler(username)
        console.log(res)
    }

    return(
        <div id='login-container'>

        <h2>Forgot Page</h2>
        <div>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={sendReminder}>Send</button>
        </div>
    </div>
    )
}

export default Forgot