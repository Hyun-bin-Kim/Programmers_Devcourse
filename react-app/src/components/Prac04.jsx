import React, { useRef, useEffect, useState } from 'react';

const Prac04 = () => {
    const [count, setCount] = useState(0);
    const renderCountRef = useRef(0);

    useEffect(() => {
        // setRenderCount(renderCount + 1);
        renderCountRef.current = renderCountRef.current + 1;
        console.log("랜더링 완료");
    }, [count]);
    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>랜더링 횟수 : {renderCountRef.current}</h1>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
};

export default Prac04;