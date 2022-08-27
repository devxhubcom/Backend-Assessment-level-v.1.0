import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllProductsAction,
  deleteProductsAction,
  getProductsAction,
} from "../actions/allProductsActions";
import { Table, Image, Button, Form } from "react-bootstrap";
import {
  getAllCategoryAction,
  getAllCategoryProductAction,
} from "../actions/categoryAction";

const Home = () => {
  const dispatch = useDispatch();
  var { isLoading, allProducts, error } = useSelector(
    (state) => state.getAllProductReducer
  );

  const [categoryId, setCategoryId] = useState();
  const [search, setSearch] = useState("");

  const { success } = useSelector((state) => state.deleteProductReducer);

  const { allCategory } = useSelector((state) => state.getAllCategoryReducer);

  const navigate = useNavigate();

  const searchOnSubmit = (event) => {
    event.preventDefault();
    dispatch(getAllProductsAction(search));
  };

  useEffect(() => {
    dispatch(getAllProductsAction(""));
    dispatch(getAllCategoryAction());
  }, [success]);

  return (
    <div>
      <div className='container my-5 border border-1 border-opacity-100 rounded-1 p-2'>
        {isLoading && <h1>...</h1>}
        {error && <p>{error.message}</p>}
        <h1>Home</h1>
        <div className='my-5 d-flex'>
          <Button
            variant='success'
            onClick={() => {
              navigate("/add-product/", { replace: true });
            }}>
            Add Product
          </Button>
          <Button
            variant='success'
            className='mx-5'
            onClick={() => {
              navigate("/order/", { replace: true });
            }}>
            All Orders
          </Button>
          <div className=' d-flex'>
            <div class>
              <Form>
                <Form.Select
                  onChange={(event) => {
                    setCategoryId(event.target.value);
                    console.log(categoryId);
                  }}>
                  <option value='0'>---</option>
                  {allCategory &&
                    allCategory.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.category_title}
                      </option>
                    ))}
                </Form.Select>
              </Form>
            </div>

            <div className=' float-end'>
              <Link to={`/category-product/${categoryId}/`}>
                <Button
                  variant='warning'
                  onClick={() => {
                    dispatch(getAllCategoryProductAction(categoryId));
                  }}>
                  Go
                </Button>
              </Link>
            </div>
          </div>
          <div className=' d-flex ms-auto float-end'>
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
        </div>

        <Table striped bordered hover variant='success'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Manufactured Date</th>
              <th>Expire Date</th>
              <th>Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allProducts &&
              allProducts.results &&
              allProducts.results.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Image src={product.image} height={60} width={60} />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.category_title}</td>
                  <td>{Date(product.manufactured_data)}</td>
                  <td>{Date(product.expire_date)}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Button
                      variant='danger'
                      onClick={() => {
                        dispatch(deleteProductsAction(product.id));
                      }}>
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Link to={`/update-product/${product.id}/`}>
                      <Button
                        variant='warning'
                        onClick={() => {
                          dispatch(getProductsAction(product.id));
                        }}>
                        Update
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
