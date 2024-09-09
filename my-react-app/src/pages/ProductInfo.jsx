import React from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const {productInfo} = useParams();
    return (
        <div>
            {productInfo} 제품 상세 페이지
        </div>
    );
};

export default ProductInfo;