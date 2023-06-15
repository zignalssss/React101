import {useState} from "react";
export default function Counter(){
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("Type Here!!");

    return(
        <>
        <button onClick={() => setCount(count + 1)}>Kick me</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>U kick me {count} times</p>
        <input type="text" value={value} onChange={(event)=> setValue(event.target.value)}/>
        <h3>{value.length == 0 ? " " : value.length}</h3>
        </>
    );
}