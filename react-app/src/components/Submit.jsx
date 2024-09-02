import React, { useCallback, useState } from 'react';

const Submit = (props) => {
    const {region} = props;
    const [form, setForm] = useState("");
    const [text, setText] = useState("");
    const [select, setSelect] = useState("coconut");
    function changeHandler(e) {
        setForm(e.target.value);
    }
    // function updateValue(e) {
    //         setForm(e.target.value);
    // }
    function submitHandler(e) {
        e.preventDefault();
        // alert(form);
        console.log("submit 으로 부터 받은 데이터 : ", form);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* {region.map((item) => (
                    <label key={item.eng}>
                        <input type='radio' name='city' value={item.eng} onChange={updateValue} />
                        {item.region}
                    </label>
                ))}
                &nbsp; &nbsp; 
                <input type='submit' value="확인"/> */}
                
                {/* <h1>이름 : {form}</h1>
                <input type='text' onChange={changeHandler} />
                <input type='submit' value="전송" /> */}

                {/* <h1>내용 : {text}</h1>
                <textarea value={text} onChange={changeHandler}></textarea>
                <input type='submit' value="전송"/> */}
                <h1>선택한 과일 : {select}</h1>
                <select value={select} onChange={changeHandler}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type='submit' value="전송" />
            </form>
        </div>
    );
};

export default Submit;