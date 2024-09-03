import React, { useState } from 'react';

const Menu = () => {
    const [menus, setMenu] = useState(["초콜렛", "사탕"]);
    const [input, setInput] = useState("");
    function changeHandler(e) {
        setInput(e.target.value);
    }
    function clickHandler() {
        setMenu((prevState) => [input, ...prevState]);
    }
    return (
        <div>
            <input type='text' onChange={changeHandler}/>
            <button onClick={clickHandler}>추가</button>
            <ul>
                {menus.map((menu, index) => (
                    <li key={index}>{menu}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;