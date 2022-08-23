import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CategorySummaryBarChart from "./CategorySummaryBarChart";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySummaryListAction } from "../actions/categoryActions";
import Loader from "./Loader";
import Error from "./Error";
import CategorySummaryPieChart from "./CategorySummaryPieChart";

const CategorySummary = () => {
  const dispatch = useDispatch();
  const { isLoading, categorySummaryList, error } = useSelector(
    (state) => state.getCategorySummaryListReducer
  );
  const navigate = useNavigate();

  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      dispatch(getCategorySummaryListAction());
    }
    ref.current = true;
  }, []);

  return (
    <div className=' container text-start my-5'>
      <Button
        variant='info'
        onClick={() => {
          navigate("/", { replace: true });
        }}>
        <h4>
          <i className='fa-solid fa-arrow-left-long'></i>
          <span>&nbsp;</span>Back
        </h4>
      </Button>
      {isLoading && <Loader />}
      {error && <Error error={error.message} />}
      <div className=' my-2 border border-opacity-100 rounded-1 text-center'>
        {categorySummaryList && (
          <CategorySummaryBarChart categorySummaryList={categorySummaryList} />
        )}
      </div>
      <div className=' my-2 border border-opacity-100 rounded-1 text-center'>
        {categorySummaryList && (
          <CategorySummaryPieChart categorySummaryList={categorySummaryList} />
        )}
      </div>
    </div>
  );
};

export default CategorySummary;
