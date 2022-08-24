import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductListAction } from "../actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import ProductList from "./ProductList";
import {
  getCategoryDetailsAction,
  updateCategoryAction,
} from "../actions/categoryActions";
import Loader from "./Loader";
import Error from "./Error";
import { Button, Col, Form, Row } from "react-bootstrap";
import ProductForm from "./ProductForm";
import ProductSummary from "./ProductSummary";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, categoryDetails, error } = useSelector(
    (state) => state.getCategoryDetailsReducer
  );
  const { updatedCategory } = useSelector(
    (state) => state.updateCategoryReducer
  );

  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: title,
    };
    dispatch(updateCategoryAction(categoryId, data));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(getProductListAction(categoryId, search));
  };

  useEffect(() => {
    dispatch(getProductListAction(categoryId, search));
    dispatch(getCategoryDetailsAction(categoryId));
  }, [updatedCategory]);

  return (
    <div className=' container-fluid my-2'>
      <Row>
        <Col>
          <div className=' container my-2 border border-1 border-opacity-100 rounded-2'>
            <div className=' container my-2 text-start'>
              {isLoading && <Loader />}
              {error && <Error error={error.message} />}
              {categoryDetails && <h1>{categoryDetails.title}</h1>}
              <Button
                variant='info'
                onClick={() => {
                  navigate("/", { replace: true });
                }}>
                <i className='fa-solid fa-arrow-left-long'></i>
              </Button>
              <Button
                onClick={() => {
                  setEditable(!editable);
                  setTitle(categoryDetails.title);
                }}>
                <i className='fa-solid fa-pen-to-square'></i>
              </Button>
            </div>
            <div className=' container my-2 text-start'>
              {editable && (
                <Form onSubmit={onSubmitHandler}>
                  <Form.Group className='mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter Title'
                      value={title}
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button variant='warning' type='submit'>
                    <i className='fa-solid fa-check'></i>
                  </Button>
                </Form>
              )}
            </div>
          </div>
          <div className=' border border-1 border-opacity-100 rounded-1 p-2 my-2'>
            <Form onSubmit={handleSearchSubmit}>
              <Row>
                <Col md={9}>
                  <Form.Control
                    type='text'
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </Col>
                <Col md={3}>
                  <Button variant='success' type='submit'>
                    <i className='fa-solid fa-magnifying-glass'></i>
                    <span>&nbsp;</span>Search Products
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div className=' container my-2 text-start border border-1 border-opacity-100 rounded-1 p-2'>
            <ProductForm categoryId={categoryId} />
          </div>
          <div className=' container my-1 text-start p-2 border border-1 border-opacity-100 rounded-2'>
            <ProductSummary categoryId={categoryId} />
          </div>
        </Col>
        <Col>
          <ProductList categoryId={categoryId} />
        </Col>
      </Row>
    </div>
  );
};

export default CategoryDetails;
