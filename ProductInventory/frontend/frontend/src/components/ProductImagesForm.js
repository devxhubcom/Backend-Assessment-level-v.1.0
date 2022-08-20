import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProductImageAction } from "../actions/productActions";

const ProductImagesForm = ({ id }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    dispatch(addProductImageAction(id, formData));
  };

  return (
    <div className=' my-2'>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>Add Images</Form.Label>
          <Form.Control
            type='file'
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default ProductImagesForm;
