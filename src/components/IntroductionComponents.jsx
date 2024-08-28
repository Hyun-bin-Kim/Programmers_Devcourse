import React from 'react';

const IntroductionComponents = (props) => {
    const { name, age, address, nameColor, ageColor, addrColor } = props;
    return (
        <div>
            안녕하세요 제 이름은 <span style={{ color: nameColor }}> {name}</span> 입니다.
            <br/>
            저는 <span style={{ color: ageColor }}>{age}</span>이고,{" "}
            <span style={{ color: addrColor }}>{address}</span>에 살고 있습니다.
        </div>
    );
};
IntroductionComponents.defaultProps = {
    name: "리액트",
}

export default IntroductionComponents;