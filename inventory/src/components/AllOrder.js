import React, { useEffect, useState } from "react";
import { Table, Image, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getOrderReducer } from "../reducers/orderReducers";
import { getOrderAction } from "../actions/orderActions";
import AddOrderForm from "./AddOrderForm";

const AllOrder = () => {
  const dispatch = useDispatch();
  const { isLoading, orderList, error } = useSelector(
    (state) => state.getOrderReducer
  );
  const { addedOrder } = useSelector((state) => state.addOrderReducer);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const searchOnSubmit = (event) => {
    event.preventDefault();
    dispatch(getOrderAction(search));
  };
  useEffect(() => {
    dispatch(getOrderAction(""));
  }, [addedOrder]);

  return (
    <div>
      <div className=' container my-5 border border-1 border-opacity-100 rounded-1 p-2'>
        <Button
          className=' my-4'
          variant='success'
          onClick={() => {
            navigate("/", { replace: true });
          }}>
          Home
        </Button>
        <Button
          className=' m-4'
          variant='warning'
          onClick={() => {
            navigate("/add-order/", { replace: true });
          }}>
          Add Order
        </Button>
        <div className=' d-flex ms-auto float-end my-4'>
          <form class='d-inline-flex' onSubmit={searchOnSubmit}>
            <input
              class='form-control'
              type='search'
              placeholder='Search'
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <button class='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>

        <Table striped bordered hover variant='success'>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Product</th>
              <th>Order Date</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Status</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderList &&
              orderList.results &&
              orderList.results.map((product) => (
                <tr key={product.id}>
                  <td>{product.customer_name}</td>
                  <td>{product.product_title}</td>
                  <td>{Date(product.order_date)}</td>
                  <td>{product.quantity}</td>
                  <td>৳{product.unit_price}</td>
                  <td>{product.status}</td>
                  <td>৳{product.total_price}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllOrder;
