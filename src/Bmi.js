import {useState ,useRef} from 'react';

const Text = ({Bmi})=>{
    if(Bmi < 18.5)
        return(<h1>Underweight</h1>);
    if(Bmi > 30)
        return(<h1>Overweigth</h1>);
    return(<h1>Normal</h1>);
}

export default function Bmi(){
    const [Bmi,setBmi] = useState(0);
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const calBmi = ()=>{
        let w = w_inputRef.current.value;
        let h = h_inputRef.current.value/100;
        setBmi(w/Math.pow(h,2).toFixed(2));
    }
    return(
        <>
        <center>
        <h1>BMI Calculator</h1>
        Weight: <input type="text" ref={w_inputRef}/>kg.<br/>
        Height: <input type="text" ref={h_inputRef}/>cm.<br/>
        <button onClick={()=>calBmi()}>Calculate!!</button><br/>
        BMI value : {Bmi}
        <Text Bmi = {Bmi}/>
        </center>
        </>
    );
}