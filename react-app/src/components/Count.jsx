import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            현재 카운터의 값은 {count} 입니다.
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
};

export default Count;