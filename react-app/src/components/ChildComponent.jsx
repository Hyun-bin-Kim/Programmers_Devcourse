import React from 'react';

const ChildComponent = (props) => {
    function updateValue(e){
        console.log(e.target.value);
        props.onAddData(e.target.value);
    }

    return (
        <>
          <h2>
            입력 : <input type='text' onChange={updateValue}/>
          </h2>  
        </>
    );
};

export default ChildComponent;