import React from 'react';
import "../FoodMenu.css"

const FoodMenu = (props) => {
    const { img, alt, type, name, price} = props;
    return (
        <div className='foodList'>
            <img
                className='foodImg'
                src={img}
                alt={alt} />
                <h1>{name}</h1>
                <h3>{type}</h3>
                <h2>{price}</h2>
            
        </div>
    );
};

export default FoodMenu;