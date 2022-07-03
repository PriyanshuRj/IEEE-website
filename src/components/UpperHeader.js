import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
export default function UpperHeader() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" style={{padding :"0px"}}>
  <Container>
    <Navbar.Brand href="https://www.ieee.org/">
      <FontAwesomeIcon icon={faHome} height={16} width={16} className="mx-2" />
      IEEE.org</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-white">
        <Nav.Link href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="text-white">IEEE <em>Xplore</em> Digital Library</Nav.Link>
        <Nav.Link href="https://standards.ieee.org/" className="text-white">IEEE Standards</Nav.Link>
        <Nav.Link href="https://spectrum.ieee.org/" className="text-white">IEEE Spectrum</Nav.Link>
        <Nav.Link href="https://www.ieee.org/sitemap.html" className="text-white">More Sites</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
