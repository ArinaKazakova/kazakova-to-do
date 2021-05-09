import React, { memo, useState } from 'react';

import ListItem from '../../components/ListItem';

const ToDoList = () => {
  const [list, setListState] = useState([
    {
      text: 'CheckSomething',
      isCompleted: false,
      id: 0,
    },
  ]);

  const [inputState, setInputState] = useState('');

  const handleInput = (e) => {
    setInputState(e.target.value);
  };

  const handleItemClick = (id) => {
    const updatedArr = list.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setListState(updatedArr);
  };

  const addItem = () => {
    if (inputState.trim()) {
      const newItem = {
        text: inputState,
        isCompleted: false,
        id: list.length + 1,
      };
      setListState([...list, newItem]);
      setInputState('');
    }
  };

  const deleteItem = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    setListState(filteredList);
  };

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
          margin: '0 auto 40px',
        }}
      >
        <input
          style={{
            width: '500px',
            padding: '10px',
          }}
          placeholder="Todo.."
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
        {list.map(({ text, isCompleted, id }) => (
          <ListItem
            key={id}
            id={id}
            text={text}
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
