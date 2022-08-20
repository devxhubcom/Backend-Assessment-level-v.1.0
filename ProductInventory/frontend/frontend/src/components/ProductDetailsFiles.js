import React, { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import { getProductFilesAction } from "../actions/productActions";
import ProductFilesForm from "./ProductFilesForm";
import { deleteProductFileAction } from "../actions/productActions";

const ProductDetailsFiles = ({ id }) => {
  const dispatch = useDispatch();
  const { isLoading, productFiles, error } = useSelector(
    (state) => state.getProductFilesReducer
  );
  const { success } = useSelector((state) => state.deleteProductFileReducer);
  const { addedFile } = useSelector((state) => state.addProductFileReducer);

  useEffect(() => {
    dispatch(getProductFilesAction(id));
  }, [success, addedFile]);

  return (
    <div className=' container my-2'>
      <ProductFilesForm id={id} />
      {isLoading && <Loader />}
      {error && <Error error={error.message} />}
      <ListGroup>
        {productFiles &&
          productFiles.map((file) => (
            <div key={file.id}>
              <ListGroup.Item>
                <div>
                  <Button
                    variant='danger'
                    onClick={() => {
                      dispatch(deleteProductFileAction(id, file.id));
                    }}>
                    <i className='fa-solid fa-trash'></i>
                  </Button>
                  <span>&nbsp;</span>
                  <a href={file.file}>{file.file}</a>
                </div>
              </ListGroup.Item>
            </div>
          ))}
      </ListGroup>
    </div>
  );
};

export default ProductDetailsFiles;
