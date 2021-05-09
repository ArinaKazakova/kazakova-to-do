import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ showCheckout, id, text, isCompleted, handleDelete, handleItemClick }) => (
  <li>
    {showCheckout && (
      <input type="checkbox" checked={isCompleted} onChange={() => handleItemClick(id)} />
    )}
    <span>{text} </span>
    <button type="button" onClick={() => handleDelete(id)}>
      Delete
    </button>
  </li>
);

export default memo(ListItem);

ListItem.defaultProps = {
  handleItemClick: () => {},
  showCheckout: false,
  isCompleted: false,
};

ListItem.propTypes = {
  showCheckout: PropTypes.bool,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  handleDelete: PropTypes.func.isRequired,
  handleItemClick: PropTypes.func,
};
