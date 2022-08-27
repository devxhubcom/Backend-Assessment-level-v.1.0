import React, { useEffect, useState } from "react";
import AddCategoryForm from "./AddCategoryForm";
import { Table, Button, Image, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProductsAction,
  getProductsAction,
} from "../actions/allProductsActions";
import { Link, useParams } from "react-router-dom";
import {
  getAllCategoryAction,
  deleteCategoryAction,
  getAllCategoryProductAction,
  updateCategoryAction,
} from "../actions/categoryAction";
import { useNavigate } from "react-router-dom";

const AllCategoryList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allCategoryProduct } = useSelector(
    (state) => state.getAllCategoryProductReducer
  );
  const { addedCategory } = useSelector((state) => state.addCategoryReducer);
  const { allCategory } = useSelector((state) => state.getAllCategoryReducer);
  const { updatedCategory } = useSelector(
    (state) => state.updateCategoryReducer
  );
  const { success } = useSelector((state) => state.deleteProductReducer);

  const { categoryId } = useParams();

  const [categoryIdNow, setCategoryIdNow] = useState();

  useEffect(() => {
    dispatch(getAllCategoryAction());
    dispatch(getAllCategoryProductAction(categoryId));
  }, [success, addedCategory, categoryId, updatedCategory]);

  return (
    <div className='container my-5 border border-1 border-opacity-100 rounded-1 p-2'>
      <div className=' my-2 '>
        <AddCategoryForm />
      </div>
      <div className=' d-inline-flex my-4'>
        <Button
          onClick={() => {
            navigate("/", { replace: true });
          }}>
          All Product
        </Button>
        <Form className='mx-2'>
          <Form.Select
            onChange={(event) => {
              setCategoryIdNow(event.target.value);
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

        <Link to={`/category-product/${categoryId}/`}>
          <Button
            className='mx-2'
            variant='warning'
            onClick={() => {
              dispatch(getAllCategoryProductAction(categoryIdNow));
            }}>
            Go
          </Button>
        </Link>
        <Button
          className='mx-2'
          variant='danger'
          onClick={() => {
            dispatch(deleteCategoryAction(categoryIdNow));
          }}>
          Delete
        </Button>
        <Button
          className='mx-2'
          variant='info'
          onClick={() => {
            var title = prompt("Enter new title: ");
            dispatch(updateCategoryAction(categoryIdNow, title));
          }}>
          Update
        </Button>
      </div>
      <div className=' my-2'>
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
            {allCategoryProduct &&
              allCategoryProduct.results &&
              allCategoryProduct.results.map((product) => (
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

export default AllCategoryList;
