import  { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addOne , muniOne , changeName } from './counterSlice';
const Counter = () => {
    const dispatch  = useDispatch();
    const counter = useSelector(state => state.counter.value);
    const [text , setText] = useState("");
    
    function handleClick (e){
        setText(e.target.value)
        dispatch(changeName(text));
    }
    return (
        <div>
            <h1>{text}</h1>
            <input onChange={handleClick} type="text" />
            <h1>{counter}</h1>
            <button onClick={()=> dispatch(addOne())} style={{ marginRight:"10px"}}>+</button>
            <button onClick={()=> dispatch(muniOne())}>-</button>
        </div>
    );
}

export default Counter;
