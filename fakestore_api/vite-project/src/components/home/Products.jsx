import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/product/productSlice";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const Products = () => {
  const { products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ customCategory: "electronics" }));
  }, [dispatch]);


  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage=4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div>

      <div className="flex flex-wrap items-center justify-around">
        {currentItems.map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </div>

      <ReactPaginate
      className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Products;
