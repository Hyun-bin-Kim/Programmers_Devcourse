// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // 스타일 파일 import

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Hyunbin's Website</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/product" className="nav-link">Product</Link>
          <Link to="/book" className="nav-link">Book</Link>
        </nav>
      </header>
    </div>
  );
};

export default Home;
