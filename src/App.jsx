import { useEffect, useState } from 'react'; 
import {  } from "react-icons/io";
import  './App.css'

function App() {
  const [advice, setAdvice] = useState(""); 
  const [count, setCount] = useState(0)

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice"); 
    const data = await res.json(); 
    setAdvice(data.slip.advice);
    setCount(count => count + 1)
  }

  useEffect(function(){
    getAdvice()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='inner-container'>
          <p>icon</p>
          <h1 className='title'>Get Random Advice</h1>
          <div className="advice-text">{advice}</div>
          <button className='btn' onClick={getAdvice}>Get Advice</button>
          <p className='count'>The number of piece of advice is {count}</p>
        </div>
      </div>
    </>
  )
}

export default App
