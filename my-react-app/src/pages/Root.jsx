import React from "react";
import Menu from "./Menu";
import Outlet from "./Outlet";

const Root = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default Root;
