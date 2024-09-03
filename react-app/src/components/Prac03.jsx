import React, { useRef, useState } from 'react';

const Prac03 = () => {
    const [refresh, setRefresh] = useState(0);
    const countRef = useRef(0);
    let currentVar = 0;

    function addRefHandler() {
        countRef.current = countRef.current + 1;
        console.log("ref: ", countRef.current)
    }
    function addVarHandler() {
        currentVar = currentVar + 1;
        console.log("var: ", currentVar);
    }
    function refreshHandler() {
        setRefresh(refresh + 1);
    }

    return (
        <div>
            <h1>Ref 값 : {countRef.current}</h1>
            <h1>변수 값 : {currentVar}</h1>
            <button onClick={addRefHandler}>Ref</button>
            <button onClick={addVarHandler}>Var</button>
            <button onClick={refreshHandler}>Rendering</button>
        </div>
    );
};

export default Prac03;
