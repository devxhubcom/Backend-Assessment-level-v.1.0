import React, { useEffect, useState } from "react";
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
import { addHistoryAction } from "../actions/historyActions";

const ProductDetails = () => {
  const { categoryId, id } = useParams();
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
  const { history } = useSelector((state) => state.addHistoryReducer);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inventory, setInventory] = useState(1);
  const [unitPrice, setUnitPrice] = useState(1);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [historyType, setHistorytype] = useState("I");

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
      dispatch(updateProductPUTAction(categoryId, id, formData));
    } else {
      formData.append("title", title);
      formData.append("description", description);
      formData.append("inventory", inventory);
      formData.append("unit_price", unitPrice);
      dispatch(updateProductPATCHAction(categoryId, id, formData));
    }
  };

  const handleAddHistorySubmit = (event) => {
    event.preventDefault();
    console.log(historyType, quantity);
    dispatch(
      addHistoryAction(categoryId, productDetails.id, quantity, historyType)
    );
  };

  useEffect(() => {
    dispatch(getProductDetailsAction(categoryId, id));
  }, [updatedProductPATCH, updatedProductPUT, history]);

  return (
    <div className=' container-fluid text-start my-5'>
      {isLoading && <Loader />}
      {error && <Error error={error.message} />}
      <div className=' d-block my-2'>
        <Button
          onClick={() => {
            navigate(`/category/${categoryId}/`, { replace: true });
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
        <Col className=' border border-1 border-opacity-100 rounded-1 m-2'>
          {productDetails && (
            <div className=' border border-1 border-opacity-100 rounded-1 my-2 p-2'>
              <Image
                src={productDetails.image}
                height={300}
                width={500}
                className=' rounded-2'
              />
              <h1>{productDetails.title}</h1>
              <h3>{productDetails.description}</h3>
              <h5>{productDetails.inventory}</h5>
              <h5>৳{productDetails.unit_price}</h5>
            </div>
          )}
          <div className=' border border-1 border-opacity-100 rounded-1 my-2 p-2'>
            {productDetails && (
              <Form onSubmit={handleAddHistorySubmit}>
                <div className=' row'>
                  <div className=' col'>
                    <Form.Group className='mb-3'>
                      <Form.Label>Type</Form.Label>
                      <Form.Select
                        name='historyType'
                        value={historyType}
                        onChange={(event) => {
                          setHistorytype(event.target.value);
                        }}>
                        <option value='I'>In</option>
                        <option value='O'>Out</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className=' col'>
                    <Form.Group>
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type='number'
                        name='quantity'
                        value={quantity}
                        onChange={(event) => {
                          setQuantity(event.target.value);
                        }}
                      />
                    </Form.Group>
                  </div>
                </div>
                <Button variant='success' type='submit'>
                  <i className='fa-solid fa-plus'></i>
                  <span>&nbsp;</span>Add History
                </Button>
              </Form>
            )}
          </div>
        </Col>

        <Col>
          {editable && (
            <Form
              onSubmit={handleSubmit}
              className=' border border-1 border-opacity-100 rounded-1 my-2 p-2'>
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
        <Col className=' border border-1 border-opacity-100 rounded-1 m-2 p-2'>
          <ProductDetailsFiles id={id} categoryId={categoryId} />
        </Col>
        <Col className=' border border-1 border-opacity-100 rounded-1 m-2 p-2'>
          <ProductDetailsImages id={id} categoryId={categoryId} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
