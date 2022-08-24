import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoryListAction,
} from "../actions/categoryActions";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import Loader from "./Loader";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { isLoading, categoryList, error } = useSelector(
    (state) => state.getCategoryListReducer
  );
  const { addedCategory } = useSelector((state) => state.addCategoryReducer);
  const { success } = useSelector((state) => state.deleteCategoryReducer);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(getCategoryListAction(search));
  };

  useEffect(() => {
    dispatch(getCategoryListAction(search));
  }, [addedCategory, success]);

  return (
    <div>
      <div className=' container text-start my-5'>
        <div className=' my-5'>
          <div className=' d-inline-flex'>
            <Button
              variant='info'
              onClick={() => {
                navigate("/summary/", { replace: true });
              }}>
              <h4>
                <i className='fa-solid fa-circle-info'></i>
                <span>&nbsp;</span>Summary View<span>&nbsp;</span>
                <i className='fa-solid fa-arrow-right-long'></i>
              </h4>
            </Button>
          </div>
          <div className=' d-inline-flex mx-5'>
            <Button
              variant='info'
              onClick={() => {
                navigate("/history/", { replace: true });
              }}>
              <h4>
                <i className='fa-solid fa-timeline'></i>
                <span>&nbsp;</span>History<span>&nbsp;</span>
                <i className='fa-solid fa-arrow-right-long'></i>
              </h4>
            </Button>
          </div>
        </div>

        <div className=' border border-1 border-opacity-100 rounded-1 p-2 my-2'>
          <Form onSubmit={handleSearchSubmit}>
            <Row>
              <Col md={10}>
                <Form.Control
                  type='text'
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </Col>
              <Col md={2}>
                <Button variant='success' type='submit'>
                  <i className='fa-solid fa-magnifying-glass'></i>
                  <span>&nbsp;</span>Search Categories
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className=' border border-1 border-opacity-100 rounded-1 p-2'>
          <CategoryForm />
        </div>
        {isLoading && <Loader />}
        {error && <Error error={error.message} />}
        <div className=' border border-1 border-opacity-100 rounded-1 my-2'>
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
    </div>
  );
};

export default CategoryList;
