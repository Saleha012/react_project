import { useCallback, useEffect, useState,useRef} from 'react'
 
import './App.css'


function App() {
  const [color, setColor] = useState("skyblue")
  const[length,setLength] =useState(8);
  const[charAllowed,setcharAllowed] = useState(false);
  const[numAllowed,setnumAllowed] =useState(false);
  const[password,setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null)




  const passwordGenerator = useCallback(()=> {
    let pass =""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numAllowed){
      str = str +"0123456789";

    }
    if(charAllowed){
      str =str+"!@#$%^&*()><{}|~`"

    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  
  
  
  
  return (
    <>
    
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <h1 className="font-bold text-2xl text-white text-center px-4 py-4 " >Background changer  and Auto-Password Generator</h1>
         <div className=' font-bold w-full max-w-md mx-auto shadow-rounded-xl px-4 py-3 my-7 text-white bg-slate-900'> Enter your Password
         <div className='flex shadow rounded-lg overflow-hidden mb-4 py-3'>
          <input type="text"
          value={password}
          className='outline-none w-full  text-red-500 py-1 px-3' 
          placeholder='passward'
          readOnly 
          ref={passwordRef}/>
          <button
           onClick={()=>{copyPasswordToClipboard()}}
           className='outline-none bg-cyan-950 text-wrap px-3 py-0.5 flex-shrink-0'>
           copy
          </button>
         </div>
         <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-3 '></div>
         <input
         type='range'
         min ={8}
         max ={50}
         value ={length}
         className='cursor pointer'
         onChange={(e)=>{setLength(e.target.value)}}
         
         />
         <label className='flex items-center mr-2'>Length : {length}</label>
         
        <div className='flex items-center gap-x-1 '>
          <input type="checkbox" 
          defaultChecked ={numAllowed}
          id="numberInput"
          onChange={()=>{setnumAllowed((prev)=>!prev)}}
          />
          <label htmlFor='numberInput'>num</label>

        </div>
        <div className='flex items-center gap-x-1 '>
          <input type="checkbox" 
          defaultChecked ={charAllowed}
          id="charInput"
          onChange={()=>{setcharAllowed((prev)=>!prev)}}
          />
          <label htmlFor='charInput'>char</label>
          
        </div>
        </div> 
        </div> 
        </div>  
      <div className=" fixed flex flex-wrap justify-center bg-zinc-300 bottom-12 insert-y-4 px-1 ">
        <div className = " flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           <button
           onClick={()=>setColor("red")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}> Red</button>
         <button
         onClick={()=> setColor("green")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
        <button
         onClick={()=> setColor("grey")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"grey"}}>Grey</button>
        
        <button
         onClick={()=> setColor("orange")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
        <button
         onClick={()=> setColor("violet")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>violet</button>
       <button
        onClick={()=> setColor("blue")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
        <button
        onClick={()=> setColor("black")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>black</button>
       <button
        onClick={()=> setColor("pink")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
        <button
        onClick={()=> setColor("yellow")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
        <button
        onClick={()=> setColor("teal")}
           className='outlon-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"teal"}}>Teal</button>
        </div>
        
        
      </div>
    
    </>
  )
}

export default App
