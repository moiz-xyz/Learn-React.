import { useState } from "react"
function App (){
  
  let [couter , setcounter] = useState (0)
  const add = ()=>
    setcounter(couter +1)
  const remove =  ()=> {
    setcounter(couter -1)

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