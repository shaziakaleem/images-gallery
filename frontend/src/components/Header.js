import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

const navbarStyle = {
    backgroundColor : "lightblue"
};

const Header = (props) => {
    const {title} = props
    return (
        <Navbar style={navbarStyle} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand> 
            </Container>
      </Navbar>
    )
};

export default Header;