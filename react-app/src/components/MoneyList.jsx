import React from 'react';

const MoneyList = (props) => {
    const { moneys } = props;
    return (
        <div>
            가격: {moneys}원
        </div>
    );
};

export default MoneyList;