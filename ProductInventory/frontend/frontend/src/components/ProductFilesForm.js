import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProductFileAction } from "../actions/productActions";

const ProductFilesForm = ({ id, categoryId }) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (var file of files) {
      formData.append("file", file);
    }
    dispatch(addProductFileAction(categoryId, id, formData));
  };

  return (
    <div className=' my-2'>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>Add Files</Form.Label>
          <Form.Control
            type='file'
            multiple
            onChange={(event) => {
              setFiles(event.target.files);
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

export default ProductFilesForm;
