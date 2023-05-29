import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { TimerFour } from './components/TimerFour';
import { IronbnbList } from './components/IronbnbList';

function App() {

   const [count, setCount] = useState(0);
   const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
     setCount((prevCount) => prevCount + 1)
    },1000)

    return () => {
      console.log("Cleanup Component");
      clearInterval(id);
    }
  }, [])

  return (
    <div className="App">
    <h3>{count}</h3>
    {show && <TimerFour />}
    <button onClick={() => setShow(!show)}>{show ? "show" : "hide"}</button>
    <IronbnbList />
    </div>
  );
}

export default App;
