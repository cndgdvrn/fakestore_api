import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeftside = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="text-6xl font-gemunu text-candreva-red tracking-wider cursor-pointer">
      CANDREVA
    </div>
  );
};

export default NavbarLeftside;
