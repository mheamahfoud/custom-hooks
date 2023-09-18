import React, { useEffect, useRef } from 'react';

const usePrevious = (count: number): number => {
    const prev = useRef<number>(count);
    useEffect(() => {
        prev.current = count;
    }, [count]);

    return prev.current;
}

export default usePrevious;
