import { useState, useEffect } from "react"

export function TimerFour(){
    const [count,setCount] = useState(0);
    
    useEffect(() => {
        const id = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        },1000)

        return() => {
            console.log("TimerFour is cleaned ")
            clearInterval(id)
        }

    }, [])

    useEffect(() => {
       document.title = count;
    }, [count])

    return(
        <div>
            <h1>Timer Four</h1>
            <p>{count}</p>
        </div>
    );
}