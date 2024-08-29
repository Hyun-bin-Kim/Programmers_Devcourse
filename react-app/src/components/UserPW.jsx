import React from 'react';

const UserPW = (props) => {
    function updateValue(e){
        props.onAddPw(e.target.value)
    }
    return (
        <div>
            <h2>PW : <input type='password' onChange={updateValue}/></h2>
        </div>
    );
};

export default UserPW;