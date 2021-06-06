import React, { memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Table } from 'react-bootstrap';

import ListItem from '../../components/ListItem';
import ENDPOINTS from '../../endpoints';
import { getData, sendData, deleteItem as deleteListItem } from '../../api';
import Modal from '../../components/Modal';
import CategoryActions from '../../store/actions/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const [list, setListState] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [isInvalid, setIsInvalidState] = useState(false);
  const [inputState, setInputState] = useState('');

  const handleInput = (e) => {
    setInputState(e.target.value);
    setIsInvalidState(false);
  };

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
    setInputState('');
    setIsInvalidState(false);
  };

  const addItem = async () => {
    if (inputState.trim()) {
      const newItem = {
        text: inputState,
        id: Math.random(),
      };

      const isDublicated = list.find((elem) => elem.text === inputState);
      if (!isDublicated) {
        // await sendData(ENDPOINTS.categories, newItem);
        dispatch(
          CategoryActions.addCategoriesRequest({ url: ENDPOINTS.categories, payload: newItem }),
        );

        getList();
        setInputState('');
        closeModal();
      } else {
        setIsInvalidState(true);
      }
    }
  };

  const deleteItem = (id) => {
    deleteListItem({ url: ENDPOINTS.categories, id });
    getList();
  };

  const getList = async () => {
    const data = await getData(ENDPOINTS.categories);
    setListState(data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container className="p-5">
      <Modal
        isOpen={modalState}
        handleClose={closeModal}
        handleClick={addItem}
        handleInput={handleInput}
        inputState={inputState}
        isInvalid={isInvalid}
      />
      <Button type="button" onClick={openModal}>
        Add new category
      </Button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto 40px',
        }}
      >
        {/* <input
          style={{
            width: '500px',
            padding: '10px',
          }}
          placeholder="Add category.."
          value={inputState}
          onChange={handleInput}
        />
        <button
          style={{
            width: '80px',
            height: '40px',
          }}
          type="button"
          onClick={addItem}
        >
          Add +
        </button> */}
      </div>
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
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ text, isCompleted, id }, index) => (
              <ListItem
                key={id}
                id={id}
                text={text}
                index={index + 1}
                isCompleted={isCompleted}
                handleDelete={deleteItem}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default memo(Categories);
