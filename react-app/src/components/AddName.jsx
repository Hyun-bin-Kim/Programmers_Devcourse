import React, { useEffect, useState } from 'react';

const AddName = () => {
    const [names, setNames] = useState(["김현빈", "리액트"]);
    const [input, setInput] = useState("");
    function InputChange(e) {
        setInput(e.target.value);
    }
    function uploadInput() {
        //case 1.
        //1.배열 원본 복사
        //const newNames = [...names, input];
        //2. 새로운 배열에 원본과 입력 받은 값 추가한 배열
        //setNames(newNames);

        //case 2. callback 함수 이용
        setNames((prevState) => [input, ...prevState]);
    }
    useEffect(() => {
        console.log("렌더링이 완료되었습니다.");
        console.log({names});
    })
    return (
        <div>
            <input type='text' onChange={InputChange}/>
            <button onClick={uploadInput}>추가</button>
            <div>
                {names.map((name, idx) => {
                    <p key={idx}>{name}</p>
                })}
            </div>
        </div>
    );
};

export default AddName;