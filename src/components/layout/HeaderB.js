import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function AppHeaderB() {
  return (
    <div className='center-navbar'>
      {/* <Navbar bg='dark' variant='dark'> */}
      <Navbar
        fixed='top'
        style={{
          backdropFilter: 'blur(10px)  contrast(140%)',
          backgroundColor: 'rgba(255,255,255,0.7)'
          // marginBottom: '100px'
        }}
        variant='light'
        // fixed='top'
      >
        <Navbar.Brand>User Info</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/react-user'>Home</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default AppHeaderB;
