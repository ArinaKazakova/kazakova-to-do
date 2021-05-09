import React, { memo, useState, useEffect } from 'react';

import ListItem from '../../components/ListItem';
import ENDPOINTS from '../../endpoints';
import { getData, sendData, deleteItem as deleteListItem } from '../../api';

const Categories = () => {
  const [list, setListState] = useState([]);

  const [inputState, setInputState] = useState('');

  const handleInput = (e) => {
    setInputState(e.target.value);
  };

  const addItem = async () => {
    if (inputState.trim()) {
      const newItem = {
        text: inputState,
        id: Math.random(),
      };

      const isDublicated = list.find((elem) => elem.text === inputState);
      if (!isDublicated) {
        await sendData(ENDPOINTS.categories, newItem);
        getList();
        setInputState('');
      }
    }
  };

  const deleteItem = (id) => {
    deleteListItem(ENDPOINTS.categories, id);
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
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(Categories);
