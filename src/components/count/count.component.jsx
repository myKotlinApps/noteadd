import React,{useState} from 'react'

function Count() {
    const [count,setCount]=useState(0);
    const [text,setText]=useState('');

    return (
        <div>
            <p>the current {text || 'count'} is {count}</p>
            <button onClick={()=> setCount(count -1)}>-1</button>
            <button onClick={()=> setCount(count)}>reset</button>
            <button onClick={()=> setCount(count +1)}>+1</button>
            <input value={text} onChange={(e)=> setText(e.target.value)}  />
        </div>
    )
}

export default Count;