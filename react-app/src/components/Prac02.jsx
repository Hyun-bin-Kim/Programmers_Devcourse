import React, { useEffect, useState } from 'react';

const Prac02 = () => {
    const [count, setCount] = useState(1);
    const [text, setText] = useState("");

    function numUp() {
        setCount((prevState) => prevState + 1);
    }
    function textChange(e) {
        setText(e.target.value);
    };

    // 마운트 할 때 실행
    useEffect(() => {
        setCount(count + 1);
    }, [])

    // count 값이 변경되었을 때 실행
    useEffect(() => {
        console.log("count 값이 변경되었습니다.")
    }, [count]);

    // count 값이 변경되었을 때 실행
    useEffect(() => {
        console.log("text 값이 변경되었습니다.")
    }, [text]);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={numUp}>+1</button>
            <hr/>
            <input type='text' onChange={textChange}/>
            <h1>{text}</h1>
        </div>
    );
};

export default Prac02;