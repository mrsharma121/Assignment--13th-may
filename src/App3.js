import React, { useState } from "react";
 
function App() {
  const [inputList, setInputList] = useState([{ Number: ""}]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { Number: ""}]);
  };

  const submit = () =>{
   const  res =  JSON.stringify(inputList)
   console.log(res)
  }
//   var x = "number"
 
  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <div  key = {i}>
            <input
              name={"Number"}
              placeholder="Enter the Phone number"
              value={x.Number}
              onChange={e => handleInputChange(e, i)}
            />

            <div >
              {inputList.length !== 1 && <button
                
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}

<button onClick = {submit} > Submit </button>
    </div>
  );
}
 
export default App;