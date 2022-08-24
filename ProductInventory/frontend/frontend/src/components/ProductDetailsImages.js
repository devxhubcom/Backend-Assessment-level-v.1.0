import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductImagesAction } from "../actions/productActions";
import ProductImagesForm from "./ProductImagesForm";
import Loader from "./Loader";
import Error from "./Error";
import { deleteProductImageAction } from "../actions/productActions";

const ProductDetailsImages = ({ id, categoryId }) => {
  const dispatch = useDispatch();
  const { isLoading, productImages, error } = useSelector(
    (state) => state.getProductImagesReducer
  );
  const { success } = useSelector((state) => state.deleteProductImageReducer);
  const { addedImage } = useSelector((state) => state.addProductImageReducer);

  useEffect(() => {
    dispatch(getProductImagesAction(categoryId, id));
  }, [success, addedImage]);

  return (
    <div>
      <ProductImagesForm id={id} categoryId={categoryId} />
      {isLoading && <Loader />}
      {error && <Error error={error.message} />}
      <div className=' d-flex row p-2'>
        {productImages &&
          productImages.map((image) => (
            <div
              key={image.id}
              className=' border border-1 border-opacity-100 rounded-1 p-2 m-2 col'>
              <Image
                key={image.id}
                src={image.image}
                height={200}
                width={300}
                className=' rounded-2'
              />
              <Button
                variant='danger'
                className=' d-block my-2'
                onClick={() => {
                  dispatch(deleteProductImageAction(categoryId, id, image.id));
                }}>
                <i className='fa-solid fa-trash'></i>
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetailsImages;
