import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductSummaryListAction } from "../actions/productActions";
import Loader from "./Loader";
import Error from "./Error";
import ProductSummaryBarChart from "./ProductSummaryBarChart";
import ProductSummaryPieChart from "./ProductSummaryPieChart";

const ProductSummary = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { isLoading, productSummaryList, error } = useSelector(
    (state) => state.getProductSummaryListReducer
  );
  const { addedProduct } = useSelector((state) => state.addProductReducer);

  useEffect(() => {
    dispatch(getProductSummaryListAction(categoryId));
  }, [addedProduct]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error error={error.message} />}
      <div className=' my-2 border border-opacity-100 rounded-1'>
        {productSummaryList && (
          <ProductSummaryBarChart productSummaryList={productSummaryList} />
        )}
      </div>
      <div className=' my-2 border border-opacity-100 rounded-1'>
        {productSummaryList && (
          <ProductSummaryPieChart productSummaryList={productSummaryList} />
        )}
      </div>
    </div>
  );
};

export default ProductSummary;
