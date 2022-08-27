import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCategoryAction } from "../actions/categoryAction";

const AddCategoryForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("category_title", title);
    dispatch(addCategoryAction(formData));
  };

  return (
    <div className=' container  col-8 border border-1 border-opacity-100 rounded-1 p-2'>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Add Category</Form.Label>
          <Form.Control
            type='text'
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
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

export default AddCategoryForm;
