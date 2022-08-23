import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryReducer } from "../reducers/categoryReducers";
import { addCategoryAction } from "../actions/categoryActions";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const { isLoading, addedCategory, error } = useSelector(
    (state) => state.addCategoryReducer
  );
  const [title, setTitle] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: title,
    };
    dispatch(addCategoryAction(data));
  };

  return (
    <div>
      <div>
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
          <Button variant='success' type='submit'>
            <i className='fa-solid fa-plus'></i>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CategoryForm;
