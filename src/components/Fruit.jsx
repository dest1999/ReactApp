import React, {useState} from 'react';
import '../style.css';

export function Fruit() {
    const arr = ['апельсин', 'банан', 'яблоко', 'киви', 'абрикос', 'груша', 'слива', 'персик'];
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState(arr[0]);

    const updateCount = () => {
        setCount((prevCount) => prevCount+1);
        setFruit(arr[arr.indexOf(fruit)+1]);
    }

    return <>
    <span>{fruit}</span>
    <button className='btn' onClick={updateCount}>Меня нажали: {count} раз</button>
    </>
    
}