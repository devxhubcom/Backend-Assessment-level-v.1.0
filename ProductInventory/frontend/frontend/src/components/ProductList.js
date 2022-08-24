import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductListAction } from "../actions/productActions";
import { ListGroup, Image, Button } from "react-bootstrap";
import Loader from "./Loader";
import Error from "./Error";
import { deleteProductAction } from "../actions/productActions";
import { useNavigate } from "react-router-dom";

const ProductList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { isLoading, productList, error } = useSelector(
    (state) => state.getProductListReducer
  );

  const { addedProduct } = useSelector((state) => state.addProductReducer);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductListAction(categoryId, ""));
  }, [addedProduct]);

  return (
    <div>
      <div>
        {isLoading && <Loader />}
        {error && <Error error={error.message} />}
        {productList &&
          productList.map((product) => (
            <div key={product.id} className=' my-2 container text-start'>
              <ListGroup>
                <ListGroup.Item>
                  <div>
                    <div className=' d-inline-flex float-start mx-2'>
                      <Image
                        src={product.image}
                        height={150}
                        width={150}
                        className=' rounded-2'
                      />
                    </div>
                    <div className=' mx-2'>
                      <h4>{product.title}</h4>
                      <h6>{product.description}</h6>
                      <h6>{product.inventory}</h6>
                      <h6>৳{product.unit_price}</h6>
                    </div>

                    <div className=' mx-2'>
                      <Button
                        variant='danger'
                        onClick={() => {
                          dispatch(deleteProductAction(categoryId, product.id));
                        }}>
                        <i className='fa-solid fa-trash'></i>
                      </Button>
                      <Button
                        variant='warning'
                        onClick={() => {
                          navigate(
                            `/category/${categoryId}/products/${product.id}`,
                            {
                              replace: true,
                            }
                          );
                        }}>
                        <i className='fa-solid fa-pen'></i>
                      </Button>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
