import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const url = 'http://localhost:1122'

  const publicHandler = async () =>{
    const response = await axios.get(url + '/api/public')
    console.log(response.data);
  }

  const privateHandler = async () =>{
    const response = await axios.get(url + '/api/private')
    console.log(response.data);
  }

  return (
    <div className="App">
      <button onClick={publicHandler}>Get public</button>
      <button onClick={privateHandler}>Get private</button>
    </div>
  )
}

export default App
