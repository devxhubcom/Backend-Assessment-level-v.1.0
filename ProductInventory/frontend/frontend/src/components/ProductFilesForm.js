import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProductFileAction } from "../actions/productActions";

const ProductFilesForm = ({ id }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    dispatch(addProductFileAction(id, formData));
  };

  return (
    <div className=' my-2'>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>Add Files</Form.Label>
          <Form.Control
            type='file'
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default ProductFilesForm;
