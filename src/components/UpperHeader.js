import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
export default function UpperHeader() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">IEEE.org</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-white">
        <Nav.Link href="#home" className="text-white">IEEE <em>Xplore</em> Digital Library</Nav.Link>
        <Nav.Link href="#link" className="text-white">IEEE Standards</Nav.Link>
        <Nav.Link href="#link" className="text-white">IEEE Spectrum</Nav.Link>
        <Nav.Link href="#link" className="text-white">More Sites</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
