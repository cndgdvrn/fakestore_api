import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../redux/product/productSlice";
import { AiFillStar } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import {
  addToCart,
  decrease,
  increase,
  remove,
} from "../../redux/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus, error } = useSelector(
    (state) => state.products
  );
  const { cart,totalPrice,totalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);

  useEffect(() => {
    console.log(totalPrice,totalQuantity);
  }, [cart]);

  return (
    <div className="mt-8 flex gap-x-10 font-gemunu">
      <img className="object-cover w-64 h-64" src={productDetail[0]?.image} />
      <div className="flex flex-col justify-center gap-y-2">
        <p className="text-3xl tracking-tight">{productDetail[0]?.title}</p>
        <p>{productDetail[0]?.description}</p>
        <div className="font-extrabold flex flex-col space-y-4">
          <p>
            {productDetail[0]?.price} <span className="text-sm">TL</span>
          </p>
          <div
            onClick={() => dispatch(addToCart(productDetail[0]))}
            className="flex items-center space-x-1 addToCart">
            <p>Sepete Ekle </p>
            <BsFillCartPlusFill className="text-lg" />
          </div>
          <p className="flex items-center space-x-1">
            Rating: {productDetail[0]?.rating.rate}{" "}
            <AiFillStar className="text-lg" />
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;
