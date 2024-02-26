
import { useState } from "react";
import "./App.css"
function App() {
  let [counter,setcounter] = useState(5)
 const addvalue = function Addavalue(){
  console.log(counter)
if (counter >=20){
  console.log(counter,"counter is greater than 20 so stop")
return;
}
else
   setcounter(counter+1);
  console.log("add counter" ,counter)
 }
 let removevalue = function Removeavalue(){
  
   console.log("removeacounter",counter)
   if(counter <= 0)
   {console.log("value is less than zero",counter);
   return;
  } 
   else{
    setcounter(counter-1) ;
   }
 }
  return (
    <div>
      <h1> Counter App </h1>
      <h2>Started Counter Value = 5. <br/>Max value = 20 <br/> Min value = 0</h2>
      <button onClick={addvalue}>Add a value    {counter}</button>
      <br />
      <button onClick={removevalue}>Remove a value    {counter}</button>
    </div>
  )
}

export default App
