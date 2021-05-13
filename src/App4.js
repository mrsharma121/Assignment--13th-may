import React, { useState } from 'react'
import './App.css'

function App4() {
    const [value, setvalue] = useState("")
    return (
        <div>
            <input 
            className = "input"
            type = "text"
            onChange = {(e) => setvalue(e.target.value) }
            autoComplete = "false"
            placeholder = "Type anything"

            />
            <div className = "box1" >{value}</div>
            <div className = "box2" >{value}</div>
            <div className = "box3" >{value}</div>
            <div className = "box4" >{value}</div>

        </div>
    )
}

export default App4