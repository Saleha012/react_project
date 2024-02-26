import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  //  let myObj = {
  //   username:"saleha"
  //  }
  return (
    <>
      <h1 className='bg-green-400' >Hy saleha</h1>
   <Card userName ="react" btnText =" clickme"/>
   <Card userName = "code" btnText = "visit me"/>
    </>
  )
}

export default App
