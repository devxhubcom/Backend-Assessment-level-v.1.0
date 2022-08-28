import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductsAction } from "../actions/allProductsActions";
import { getAllCategoryAction } from "../actions/categoryAction";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const { addedProduct } = useSelector((state) => state.addProductReducer);
  const { allCategory } = useSelector((state) => state.getAllCategoryReducer);

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [ManufactureDate, setManufactureDate] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [Image, setImage] = useState("");
  const [category, setcategory] = useState(null);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("title", Title);
    formData.append("description", Description);
    formData.append("quantity", Quantity);
    formData.append("price", Price);
    formData.append("manufactured_date", ManufactureDate);
    formData.append("expire_date", ExpiryDate);
    formData.append("image", Image);
    formData.append("category", category);
    dispatch(addProductsAction(formData));
  };

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, []);

  return (
    <div className=' container my-5 border border-1 border-opacity-100 rounded-1 p-2'>
      <div className=' text-center'>
        <h1>Add Product</h1>
      </div>

      <div className='my-5'>
        <Button
          variant='success'
          onClick={() => {
            navigate("/", { replace: true });
          }}>
          Home
        </Button>
      </div>

      {allCategory && (
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              value={Title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              value={Description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='number'
              value={Price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Select
            value={category}
            onChange={(event) => {
              setcategory(event.target.value);
            }}>
               <option value="0">---</option>
            {allCategory.map((i) => (
              <option key={i.id} value={i.id}>
                {i.category_title}
              </option>
            ))}
          </Form.Select>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Manufacture Date</Form.Label>
            <Form.Control
              type='date'
              value={ManufactureDate}
              onChange={(event) => {
                setManufactureDate(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type='date'
              value={ExpiryDate}
              onChange={(event) => {
                setExpiryDate(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type='number'
              value={Quantity}
              placeholder='number'
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
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
    </div>
  );
};

export default AddProductForm;
