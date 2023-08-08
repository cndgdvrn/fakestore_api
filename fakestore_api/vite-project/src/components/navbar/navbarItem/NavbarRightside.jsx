import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarRightside = () => {
  const navigate = useNavigate();

  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center justify-center border rounded-lg bg-gray-300 p-2 font-gemunu">
        <input
          className="outline-none bg-transparent placeholder-zinc-500"
          type="text"
          placeholder="Arama..."
        />
        <BiSearch className="text-xl" />
      </div>
      <AiOutlineHeart className="text-2xl" />
      <div onClick={()=>navigate("cart")} className="relative cursor-pointer">
        <AiOutlineShoppingCart size={28}  />
        <span className="absolute -top-[14px] -right-[14px] bg-candreva-red w-[22px] h-[22px] rounded-full flex items-center justify-center text-white">
          {totalQuantity}
        </span>
      </div>
    </div>
  );
};

export default NavbarRightside;
