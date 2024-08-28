import React from 'react';

const DefaultProps = ({name = "리액트"}) => {
    return (
        <div>
            안녕하세요. 제 이름은 {name}입니다.
        </div>
    );
};
// DefaultProps.defaultProps = {
//     name:"리액트"
// }

export default DefaultProps;