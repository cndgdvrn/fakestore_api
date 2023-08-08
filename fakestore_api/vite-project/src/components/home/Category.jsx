import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/category/categorySlice";
import {
  getSpecificProduct,
  getSpecificSortedProduct,
  updateCategory,
} from "../../redux/product/productSlice";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state) => state.categories
  );
  const {currentCategory} = useSelector(state=>state.products)

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(()=>{
    console.log(currentCategory);
  },[currentCategory])

  const handleClick = (category) => {
    dispatch(updateCategory(category));
    dispatch(getSpecificProduct(category));
  };

  return (
    <div className="w-1/5  h-64">
      {/* {loading && <p>Loading .........</p>} */}
      <div className="font-gemunu text-2xl flex justify-start items-center p-2">
        KATEGORİLER
      </div>
      {categories?.map((category, i) => {
        return (
          <div
            onClick={() => handleClick(category)}
            key={i}
            className="font-gemunu flex justify-start items-center hover:bg-candreva-red p-2 cursor-pointer">
            {category.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
