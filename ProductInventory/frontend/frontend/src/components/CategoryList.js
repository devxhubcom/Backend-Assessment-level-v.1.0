import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoryListAction,
} from "../actions/categoryActions";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import Loader from "./Loader";
import Error from "./Error";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { isLoading, categoryList, error } = useSelector(
    (state) => state.getCategoryListReducer
  );
  const { addedCategory } = useSelector((state) => state.addCategoryReducer);
  const { success } = useSelector((state) => state.deleteCategoryReducer);

  useEffect(() => {
    dispatch(getCategoryListAction());
  }, [addedCategory, success]);

  return (
    <div>
      <div className=' container text-start my-5'>
        <div>
          <CategoryForm />
        </div>
        {isLoading && <Loader />}
        {error && <Error error={error.message} />}
        <Row>
          {categoryList &&
            categoryList.map((category) => (
              <Col md={6} key={category.id}>
                <div className=' border border-2 border-dark rounded-1 m-2 p-2'>
                  <div className='d-inline-flex'>
                    <Link
                      to={`category/${category.id}/`}
                      className='text-decoration-none text-black'>
                      <h1>
                        <i className='fa-solid fa-folder'></i>
                        <span>&nbsp;</span>
                        {category.title}
                      </h1>
                    </Link>
                  </div>

                  <Button
                    className='d-inline-flex float-end'
                    variant='danger'
                    size='lg'
                    onClick={() => {
                      dispatch(deleteCategoryAction(category.id));
                    }}>
                    <i className='fa-solid fa-trash'></i>
                  </Button>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default CategoryList;
