import { useEffect, useState } from "react";

const StateDemo = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("");

    useEffect(() => {
        document.title=`clicked ${counter} times`;
    })

    const Style = {
        padding: '10px'
    }

    const increment = () => {
        setCounter(counter+1);
    }

    const update = (event) => {
        setInput(event.target.value)
    }
    return (
        <div>
            <h3>Use State and Use Effect Hooks : </h3>
         {counter}
        <button style={Style} onClick={increment}>increment</button>
        <br/>
        <>
            Enter AnyThing :: 
            <input style={Style} onChange={update}></input>
            <br />
            Your Input ::  {input}
            
        </>
    </div>
    );
}

export default StateDemo;