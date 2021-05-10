import React, { memo } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import ROUTES from '../../router/constants';

const Header = () => (
  <Navbar bg="light" expand="lg" className="justify-content-between">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {ROUTES.map((route) => (
          <Nav.Item>
            <Nav.Link key={route.path} href={route.path}>
              {route.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default memo(Header);
