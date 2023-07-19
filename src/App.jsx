import { useState } from 'react'; 
import  './App.css'

function App() {
  const [count, setCount] = useState(0)

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice"); 
    const data = res.json(); 
    console.log(data);
  }

  return (
    <>
      <div className='container'>
          <h1>Hello World</h1>
          <button className='btn' onClick={getAdvice}>Get Advice</button>
      </div>
    </>
  )
}

export default App
