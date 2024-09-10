import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  const clickHandler = (e) => {
    setProductId(e.target.value);
  };

  useEffect(() => {
    if (productId) {
      navigate(`/product/${productId}`);
    }
  }, [productId, navigate]);

  return (
    <div className="product-container">
      <h1>Select a Product</h1>
      <div className="button-container">
        <button onClick={clickHandler} value="p001" className="product-button">
          1번 제품
        </button>
        <button onClick={clickHandler} value="p002" className="product-button">
          2번 제품
        </button>
        <button onClick={clickHandler} value="p003" className="product-button">
          3번 제품
        </button>
      </div>
    </div>
  );
};

export default Product;
