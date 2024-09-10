// src/pages/Outlet.js
import React from "react";
import { Outlet as RouterOutlet } from "react-router-dom";
import "./Outlet.css"; // 스타일 파일 import

const Outlet = () => {
  return (
    <div className="outlet">
      <RouterOutlet />
    </div>
  );
};

export default Outlet;
