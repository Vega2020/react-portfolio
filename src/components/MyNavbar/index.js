import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Jeremy Flowers
    </Navbar.Brand>
  </Navbar>
    </div>
  )
}

export default MyNavbar