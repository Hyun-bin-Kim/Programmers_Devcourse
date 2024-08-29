import React from 'react';

const UserID = (props) => {
    function updateValue(e){
        props.onAddId(e.target.value)
    }
    return (
        <div>
            <h2>ID : <input type='text' onChange={updateValue}/></h2>
        </div>
    );
};

export default UserID;