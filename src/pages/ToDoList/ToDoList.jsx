import React, { memo, useState, useEffect } from 'react';

import ListItem from '../../components/ListItem';
import ENDPOINTS from '../../endpoints';
import { getData, sendData, deleteItem as deleteListItem, updateItem } from '../../api';

const ToDoList = () => {
  const [list, setListState] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState();
  const [inputState, setInputState] = useState('');

  const handleInput = (e) => {
    setInputState(e.target.value);
  };

  const handleItemClick = (id) => {
    const todoItem = list.find((elem) => elem.id === id);
    updateItem(ENDPOINTS.todoList, { ...todoItem, isCompleted: !todoItem.isCompleted });
    getList();
  };

  const addItem = async () => {
    if (inputState.trim()) {
      const newItem = {
        id: Math.random(),
        text: inputState,
        category: selected,
        isCompleted: false,
      };
      await sendData(ENDPOINTS.todoList, newItem);
      getList();
      setInputState('');
    }
  };

  const deleteItem = (id) => {
    deleteListItem(ENDPOINTS.todoList, id);
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
    <div
      style={{
        width: '600px',
        margin: '60px auto',
        padding: '50px',
        background: 'mintcream',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '0 auto 40px',
          width: '500px',
        }}
      >
        <input
          style={{
            width: '476px',
            padding: '10px',
            margin: '5px',
          }}
          placeholder="Todo.."
          value={inputState}
          onChange={handleInput}
        />
        <select
          style={{
            width: '100%',
            padding: '10px',
            margin: '5px',
          }}
          onChange={(e) => setSelected(e.target.value)}
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>
            Choose category
          </option>
          {categories.map((item) => (
            <option key={item.id} value={item.text} label={item.text} />
          ))}
        </select>
        <button
          style={{
            width: '100%',
            height: '40px',
            margin: '5px',
          }}
          type="button"
          onClick={addItem}
        >
          Add +
        </button>
      </div>
      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        {!list.length && (
          <h3>
            <b>Empty list</b>
          </h3>
        )}
        {list.map(({ text, category, isCompleted, id }) => (
          <ListItem
            showCheckout
            key={id}
            id={id}
            text={`${text} ${category ? `(${category})` : ''}`}
            isCompleted={isCompleted}
            handleDelete={deleteItem}
            handleItemClick={handleItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(ToDoList);
