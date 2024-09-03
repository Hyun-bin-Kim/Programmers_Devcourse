import React, { useState, useRef } from 'react';

const Prac05 = () => {
    const [currentText, setCurrentText] = useState("");
    const inputRef = useRef(); //inputRef = { current : <input> }

    function sendBtnHandler() {
        // input 태그 안의 내용 : inputRef.current.value
        setCurrentText(inputRef.current.value); // 렌더링 -> inputRef.current .value 화면 업데이트
        console.log("렌더링 완료")
    }

    return (
        <div>
            <input type='text' ref={inputRef}/>
            <button onClick={sendBtnHandler}>전송</button>
            <h3>전송된 단어: {currentText}</h3>
        </div>
    );
};

export default Prac05;