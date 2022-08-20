import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <div className=' container-fluid my-5'>
        <Row>
          <Col>
            <div className=' text-start'>
              <ProductForm />
            </div>
          </Col>
          <Col>
            <div className=' text-start'>
              <ProductList />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
