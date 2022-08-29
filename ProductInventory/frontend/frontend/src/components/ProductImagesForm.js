import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProductImageAction } from "../actions/productActions";

const ProductImagesForm = ({ id, categoryId }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (var image of images) {
      formData.append("image", image);
    }
    dispatch(addProductImageAction(categoryId, id, formData));
  };

  return (
    <div className=' my-2'>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>Add Images</Form.Label>
          <Form.Control
            type='file'
            multiple
            onChange={(event) => {
              setImages(event.target.files);
            }}
          />
        </Form.Group>
        <Button variant='success' type='submit'>
          <i class='fa-solid fa-cloud-arrow-up'></i>
          <span>&nbsp;</span>Upload
        </Button>
      </Form>
    </div>
  );
};

export default ProductImagesForm;
