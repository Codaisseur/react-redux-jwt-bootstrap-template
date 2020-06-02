import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateHomepage } from "../../store/homepages/actions";

const EditMyPageForm = props => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [bgColor, setBgColor] = useState(props.backgroundColor);
  const [color, setColor] = useState(props.color);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const newPageValues = { title, description, bgColor, color };
    dispatch(updateHomepage(props.id, newPageValues));
  };

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className='mt-5'>
        <h1 className='mt-5 mb-5'>Edit my page</h1>
        <Form.Group controlId='formTitle'>
          <Form.Label>Page title</Form.Label>
          <Form.Control
            value={title}
            onChange={event => setTitle(event.target.value)}
            type='text'
          />
        </Form.Group>

        <Form.Group controlId='formDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={event => setDescription(event.target.value)}
            type='text'
          />
        </Form.Group>

        <Form.Group controlId='formBgColor'>
          <Form.Label>bg color</Form.Label>
          <Form.Control
            value={bgColor}
            onChange={event => setBgColor(event.target.value)}
            type='color'
          />
        </Form.Group>

        <Form.Group controlId='formColor'>
          <Form.Label>Color</Form.Label>
          <Form.Control
            value={color}
            onChange={event => setColor(event.target.value)}
            type='color'
          />
        </Form.Group>

        <Form.Group className='mt-5'>
          <Button variant='primary' type='submit' onClick={onSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default EditMyPageForm;
