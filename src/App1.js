// import './App.css';
// import Dropdown from 'react-bootstrap/Button';
import {useState} from 'react';
function App() {
const [input, setInput] = useState("")
const [output, setoutPut] = useState()
  const calculate = () =>{
    let x = input
    let arr = []
    for (let i = 0; i<=(x) ; i++ ){
      if (i%2 === 0){
        arr.push((i+1)**2  + 1 )
      }
      if (i%2 !== 0){
        arr.push((i+1)**2 -1 )
      }
    }
    console.log(arr[(arr.length)-1])
    setoutPut(arr[(arr.length)-1])
    setInput("")
  }
  return (
    <>
      <input type = "text" placeholder = "Enter the number" autoComplete = "false" onChange = {(e) => setInput(e.target.value)} />
    <button onClick = {calculate} > Submit </button>
    <h2> {output} </h2>
    </>

  );
}

export default App;
