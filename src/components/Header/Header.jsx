import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../router/constants';

const Header = () => (
  <div
    style={{
      margin: '20px auto',
      width: '600px',
    }}
  >
    {ROUTES.map((route) => (
      <Link
        style={{
          margin: '20px',
        }}
        key={route.path}
        to={route.path}
      >
        {route.label}
      </Link>
    ))}
  </div>
);

export default memo(Header);
