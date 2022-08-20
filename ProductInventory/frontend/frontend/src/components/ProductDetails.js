import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetailsAction,
  updateProductPATCHAction,
  updateProductPUTAction,
} from "../actions/productActions";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import ProductDetailsFiles from "./ProductDetailsFiles";
import ProductDetailsImages from "./ProductDetailsImages";
import Loader from "./Loader";
import Error from "./Error";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, productDetails, error } = useSelector(
    (state) => state.getProductDetailsReducer
  );
  const { updatedProductPATCH } = useSelector(
    (state) => state.updateProductPATCHReducer
  );
  const { updatedProductPUT } = useSelector(
    (state) => state.updateProductPUTReducer
  );

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inventory, setInventory] = useState(1);
  const [unitPrice, setUnitPrice] = useState(1);
  const [image, setImage] = useState("");

  const [editable, setEditable] = useState(false);

  const setFields = () => {
    setEditable(!editable);
    setTitle(productDetails.title);
    setDescription(productDetails.description);
    setInventory(productDetails.inventory);
    setUnitPrice(productDetails.unit_price);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("title", title);
      formData.append("description", description);
      formData.append("inventory", inventory);
      formData.append("unit_price", unitPrice);
      formData.append("image", image);
      dispatch(updateProductPUTAction(id, formData));
    } else {
      formData.append("title", title);
      formData.append("description", description);
      formData.append("inventory", inventory);
      formData.append("unit_price", unitPrice);
      dispatch(updateProductPATCHAction(id, formData));
    }
  };

  useEffect(() => {
    dispatch(getProductDetailsAction(id));
  }, [updatedProductPATCH, updatedProductPUT]);

  return (
    <div className=' container-fluid text-start my-5'>
      {isLoading && <Loader />}
      {error && <Error error={error.message} />}
      <div className=' d-block my-2'>
        <Button
          onClick={() => {
            navigate("/", { replace: true });
          }}>
          <i className='fa-solid fa-arrow-left-long'></i>
        </Button>
      </div>
      <div className=' d-block my-2'>
        <Button onClick={setFields}>
          <i className='fa-solid fa-pen-to-square'></i>
        </Button>
      </div>

      <Row>
        <Col>
          {productDetails && (
            <div className=' my-2'>
              <Image
                src={productDetails.image}
                height={300}
                width={500}
                className=' rounded-2'
              />
              <h2>{productDetails.title}</h2>
              <h5>{productDetails.description}</h5>
              <h6>{productDetails.inventory}</h6>
              <h6>{productDetails.unit_price}</h6>
            </div>
          )}
        </Col>
        <Col>
          {editable && (
            <Form onSubmit={handleSubmit}>
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
              <Form.Group className='mb-3'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Description'
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Inventroy</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Inventroy'
                  value={inventory}
                  onChange={(event) => {
                    setInventory(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Unit Price</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Unit Price'
                  value={unitPrice}
                  onChange={(event) => {
                    setUnitPrice(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type='file'
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          )}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <ProductDetailsFiles id={id} />
        </Col>
        <Col>
          <ProductDetailsImages id={id} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
