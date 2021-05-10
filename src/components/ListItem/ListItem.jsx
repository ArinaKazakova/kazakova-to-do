import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ListItem = ({
  showCheckout,
  id,
  text,
  index,
  isCompleted,
  handleDelete,
  handleItemClick,
}) => (
  <tr>
    <td>{index}</td>
    {showCheckout && (
      <td>
        <input type="checkbox" checked={isCompleted} onChange={() => handleItemClick(id)} />
      </td>
    )}
    <td>
      <span>{text} </span>
    </td>
    <td>
      <Button variant="danger" type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </td>
  </tr>
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
  index: PropTypes.number.isRequired,
};
