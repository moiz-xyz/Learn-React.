import { useState } from "react"
function App (){
  
  let [couter , setcounter] = useState (0)
  const add = () => {
    if (couter <20 ){
      setcounter(couter +1)
    }  else {
alert("Value cannot exceed 20")
    }
  }
  const remove =  ()=> {
if( couter < 1){
alert("Value cannot be less than 0")
} else{
  setcounter (couter - 1)
}
    }
  return <>
  <div>
    <h3>Moiz counter value {couter}</h3>

    <button onClick={add}>Add a value</button>
    <button onClick={remove}>Remove a value</button>
    <p>Final value {couter}</p>
  </div>
  </>
} 
export default App