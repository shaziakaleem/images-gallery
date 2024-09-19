import React from 'react';
import {Navbar} from 'react-bootstrap';

const Header = (props) => {
    const {title} = props
    return (
        <Navbar bg="light" data-bs-theme="dark">
          <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Navbar>
    )
};

export default Header;