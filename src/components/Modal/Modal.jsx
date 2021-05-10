import React, { memo } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddCategoryModal = ({
  isOpen,
  handleClose,
  handleClick,
  handleInput,
  inputState,
  isInvalid,
}) => (
  <Modal show={isOpen} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add new category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form size="md">
        <Form.Row>
          <Col>
            <Form.Label>Todo</Form.Label>
            <Form.Control
              value={inputState}
              onChange={handleInput}
              type="text"
              placeholder="Todo..."
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">Already exists</Form.Control.Feedback>
          </Col>
        </Form.Row>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClick}>
        Add
      </Button>
    </Modal.Footer>
  </Modal>
);

export default memo(AddCategoryModal);

AddCategoryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
};
