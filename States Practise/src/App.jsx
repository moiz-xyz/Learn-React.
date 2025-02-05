// import React,{useState} from "react"
function App (){
  let inp = document.getElementById("inp") ;
  const showValue = () => {
    alert (` The value is stored click the button to see or hide it ${inp.value}`);

    inp.value = "";
  }
  const hidevalue = () =>{
    
    
  }
  return <>

<input type="text"  id="inp"placeholder="Write any secret"/> <button onClick={submit}>Submit</button> <br />
<button onClick={showValue}>Show secret</button>  <br />
<button onClick={hidevalue}>Hide secret</button> 

  </>
} 
export default App