import React, { useState } from 'react';
import useStateWithHistory from './useStateWithHistory';

const StateHistoryCompoenent = () => {
    const [count, setCount, { back, forward, go, history, pointer }] = useStateWithHistory(1)
    const [name, setName] = useState("kyle")
    return (
        <div>
            <div>{count}</div>
            <div>{history?.join(',')}</div>
            <div>{pointer + '- ' + count}</div>
            <div>{name}</div>
            <button onClick={() => {
                setCount((prev: any) => prev * 2)
            }}>Double</button>
            <button onClick={() => {
                setCount((prev: any) => prev +1)
            }}>Increament</button>

            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
            <button onClick={()=>go(0)}>Go</button>

            <button onClick={()=>{
                setName('tesss')
            }}>Change Name</button>
        </div>
    );
}

export default StateHistoryCompoenent;
