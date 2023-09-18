import React, { useState } from 'react';
import usePrevious from './usePrevious';

const PreviousComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("kyle")
    const previousCount = usePrevious(count);
    return (
        <div>
            {count} - {previousCount}
            <div>{name}</div>
            <button onClick={() => setCount(currentCount => currentCount + 1)} >Increment</button>
        </div>
    );
}

export default PreviousComponent;
