import { useEffect, useState, useRef } from 'react'; 
import { IoIosStar, IoIosCopy } from "react-icons/io";
import  './App.css'

function App() {
  const [advice, setAdvice] = useState(""); 
  const [count, setCount] = useState(0)
  const elementRef = useRef(null);

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice"); 
    const data = await res.json(); 
    setAdvice(data.slip.advice);
    setCount(count => count + 1); 
  }

  useEffect(function(){
    getAdvice()
  }, [])


  const copyText = () => {
    if (elementRef.current) {
        const range = document.createRange();
        range.selectNode(elementRef.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        // Optionally, you can show a message or update the state to indicate the text has been copied.
        console.log(elementRef.current.innerText);
    }
  }

  return (
    <>
      <div className='container'>
        <div className='inner-container'>
          < IoIosStar className='star-icon' /> 
          <h1 className='title'>Get Random Advice</h1>
          <div className="advice-text">
            <div className="copy-text">
              <IoIosCopy className="copy-icon" onClick={copyText} />
            </div>
            <div ref={elementRef} >
              {advice}
            </div>
          </div>
          <button className='btn' onClick={getAdvice}>Get Advice</button>
          <p className='count'>The number of piece of advice is {count}</p>
        </div>
      </div>
    </>
  )
}

export default App; 
