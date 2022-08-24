import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHistoryListAction,
  deleteHistoryAction,
} from "../actions/historyActions";
import Loader from "./Loader";
import Error from "./Error";
import { Table, Button, Image, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HistoryList = () => {
  const dispatch = useDispatch();
  const { isLoading, historyList, error } = useSelector(
    (state) => state.getHistoryListReducer
  );
  const { success } = useSelector((state) => state.deleteHistoryReducer);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(getHistoryListAction(search));
  };

  useEffect(() => {
    dispatch(getHistoryListAction(search));
  }, [dispatch, success]);

  return (
    <div>
      <div className=' container my-5 text-start'>
        {isLoading && <Loader />}
        {error && <Error error={error.message} />}
        <div className=' my-2'>
          <Button
            variant='info'
            onClick={() => {
              navigate("/", { replace: true });
            }}>
            <i className='fa-solid fa-arrow-left-long'></i>
          </Button>
        </div>
        <div className=' border border-1 border-opacity-100 rounded-1 p-2 my-2'>
          <Form onSubmit={handleSearchSubmit}>
            <Row>
              <Col md={10}>
                <Form.Control
                  type='text'
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </Col>
              <Col md={2}>
                <Button variant='success' type='submit'>
                  <i className='fa-solid fa-magnifying-glass'></i>
                  <span>&nbsp;</span>Search Histories
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Created At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {historyList &&
                historyList.map((history) => (
                  <tr key={history.id}>
                    <td>
                      <Image
                        src={history.product.image}
                        height={50}
                        width={50}
                      />
                    </td>
                    <td>{history.product.title}</td>
                    <td>
                      {history.history_type === "I" ? (
                        <i className='fa-solid fa-down-long'></i>
                      ) : (
                        <i className='fa-solid fa-up-long'></i>
                      )}
                    </td>
                    <td>{history.quantity}</td>
                    <td>{Date(history.created_at)}</td>
                    <td>
                      <Button
                        variant='danger'
                        onClick={() => {
                          dispatch(deleteHistoryAction(history.id));
                        }}>
                        <i className='fa-solid fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
