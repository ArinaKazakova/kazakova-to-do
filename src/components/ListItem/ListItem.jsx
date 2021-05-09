import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ id, text, isCompleted, handleDelete, handleItemClick }) => (
  <li>
    <input type="checkbox" checked={isCompleted} onChange={() => handleItemClick(id)} />
    <span>{text} </span>
    <button type="button" onClick={() => handleDelete(id)}>
      Delete
    </button>
  </li>
);

export default memo(ListItem);

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};
