import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../actions/allProductsActions";
import { addOrderAction } from "../actions/orderActions";
import { useNavigate } from "react-router-dom";

const AddOrderForm = () => {
  const dispatch = useDispatch();
  var { isLoading, allProducts, error } = useSelector(
    (state) => state.getAllProductReducer
  );

  var { addedOrder } = useSelector((state) => state.addOrderReducer);

  const [name, setName] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [product, setproduct] = useState("");
  const [status, setstatus] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("customer_name", name);
    formData.append("product", product);
    formData.append("quantity", Quantity);
    formData.append("status", status);
    dispatch(addOrderAction(formData));
    setName("")
    setQuantity("")
    setproduct("")
    setstatus("")

  };

  useEffect(() => {
    dispatch(getAllProductsAction(""));
  }, [addedOrder]);


  return (
    <div className=' container my-5 border border-1 border-opacity-100 rounded-1 p-2'>

      <h1 className=' my-2'>Add Order</h1>
      <Button
        className=' my-4'
        variant='success'
        onClick={() => {
          navigate("/order/", { replace: true });
        }}>
        Orders Page
      </Button>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Customer Name'
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Select
          onChange={(event) => {
            setproduct(event.target.value);
          }}>
            <option value="0">---</option>
          {allProducts &&
            allProducts.results &&
            allProducts.results.map((product) => (
              <option value={product.id}>{product.title}</option>
            ))}
        </Form.Select>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type='number'
            placeholder='Quantity'
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Select
          onChange={(event) => {
            setstatus(event.target.value);
          }}>
          <option value='pending'>Pending</option>
          <option value='decline'>Decline</option>
          <option value='deliveried'>Deliveried</option>
        </Form.Select>

        <Button className='mt-3' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddOrderForm;
