import React from "react";
import Menu from "./Menu";
import Outlet from "./Outlet";
import "./Root.css"; // 스타일 파일 import

const Root = () => {
  return (
    <div className="root-container">
      <div className="menu">
        <Menu />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
