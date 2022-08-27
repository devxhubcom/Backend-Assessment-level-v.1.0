import React, { useEffect, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addFileAction,
  deleteFileAction,
  getAllFilesAction,
} from "../actions/fileUploadActions";

const UploadFiles = () => {
  const dispatch = useDispatch();
  const { fileList } = useSelector((state) => state.getFileReducer);
  const { addedFile } = useSelector((state) => state.addFileReducer);
  const { success } = useSelector((state) => state.deleteFileReducer);
  const [file, setFile] = useState("");

  const uploadSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    dispatch(addFileAction(formData));
  };

  useEffect(() => {
    dispatch(getAllFilesAction());
  }, [addedFile, success]);

  return (
    <div>
      <div className=' container my-5'>
        <Form onSubmit={uploadSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>File</Form.Label>
            <Form.Control
              type='file'
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </Form.Group>
          <Button type='submit'>Upload</Button>
        </Form>
      </div>
      <div className=' container my-5'>
        <ListGroup>
          {fileList &&
            fileList.results &&
            fileList.results.map((file) => (
              <div>
                <ListGroup.Item key={file.id}>
                  <a href={file.file}>{file.file}</a>
                </ListGroup.Item>
                <Button
                  variant='danger'
                  onClick={() => {
                    dispatch(deleteFileAction(file.id));
                  }}>
                  Delete
                </Button>
              </div>
            ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default UploadFiles;
