import React, { memo, useState, useEffect } from 'react';
import { Button, Container, Table, Form, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import ListItem from '../../components/ListItem';
import ENDPOINTS from '../../endpoints';
import { getData, sendData, deleteItem as deleteListItem, updateItem } from '../../api';
import TodoActions from '../../store/actions/todo';

const ToDoList = () => {
  const dispatch = useDispatch();
  const [list, setListState] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState();
  const [inputState, setInputState] = useState('');

  const handleInput = (e) => {
    setInputState(e.target.value);
  };

  const handleItemClick = (id) => {
    const todoItem = list.find((elem) => elem.id === id);
    updateItem({
      url: ENDPOINTS.todoList,
      payload: { ...todoItem, isCompleted: !todoItem.isCompleted },
    });
    getList();
  };

  const addItem = () => {
    if (inputState.trim()) {
      const newItem = {
        id: Math.random(),
        text: inputState,
        category: selected,
        isCompleted: false,
      };
      dispatch(TodoActions.addToDoRequest({ url: ENDPOINTS.todoList, payload: newItem }));
      getList();
      setInputState('');
    }
  };

  const deleteItem = (id) => {
    deleteListItem({ url: ENDPOINTS.todoList, id });
    getList();
  };

  const getList = async () => {
    const data = await getData(ENDPOINTS.todoList);
    setListState(data);
  };

  const getCategories = async () => {
    const data = await getData(ENDPOINTS.categories);
    setCategories(data);
  };

  useEffect(() => {
    getList();
    getCategories();
  }, []);

  return (
    <Container className="p-5">
      <Form size="md">
        <Form.Row>
          <Col>
            <Form.Label>Todo</Form.Label>
            <Form.Control
              value={inputState}
              onChange={handleInput}
              type="text"
              placeholder="Todo..."
            />
          </Col>
          <Col>
            <Form.Label>Choose category</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setSelected(e.target.value)}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Choose category
              </option>
              {categories.map((item) => (
                <option key={item.id} value={item.text} label={item.text} />
              ))}
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <br />
            <Button type="button" onClick={addItem}>
              Add +
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <br />
      <br />
      {!list.length && (
        <h3>
          <b>Empty list</b>
        </h3>
      )}
      {!!list.length && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>To do</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ text, category, isCompleted, id }, index) => (
              <ListItem
                showCheckout
                key={id}
                id={id}
                index={index + 1}
                text={`${text} ${category ? `(${category})` : ''}`}
                isCompleted={isCompleted}
                handleDelete={deleteItem}
                handleItemClick={handleItemClick}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default memo(ToDoList);
