import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "../actions/productActions";
import Loader from "./Loader";
import Error from "./Error";

const ProductForm = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { isLoading, addedProduct, error } = useSelector(
    (state) => state.addProductReducer
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inventory, setInventory] = useState(1);
  const [unitPrice, setUnitPrice] = useState(1);
  const [image, setImage] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("inventory", inventory);
    formData.append("unit_price", unitPrice);
    formData.append("image", image);
    dispatch(addProductAction(categoryId, formData));
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error error={error.message} />}
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
    </div>
  );
};

export default ProductForm;
