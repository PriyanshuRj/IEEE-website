import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EsdcIntro from './EsdcIntro';
import ImportantDates from './ImportantDates';
import Styles from "../Styles/Header.module.css";
export default function Header() {
  return (
    <>
    <Navbar expand="lg" className={Styles.navdiv}>
      <Container fluid>
        <Navbar.Brand href="#" className={Styles.navHead}>IEE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex justify-content-center"
            style={{ maxHeight: '200px',minHeight:"50px" ,width:"100%",color:"black" }}
            navbarScroll
          >
            <Nav.Link className={Styles.navItem + "  mx-4 h5"} href="#action1">Home</Nav.Link>
            <Nav.Link className={Styles.navItem + "  mx-4 h5"} href="/">About</Nav.Link>
            <Nav.Link className={Styles.navItem + "  mx-4 h5"} href="/">Programs</Nav.Link>
           
            <Nav.Link className={Styles.navItem + " mx-4 h5"} href="#">
              Authors
            </Nav.Link>
            <Nav.Link className={Styles.navItem + " mx-4 h5"} href="#">
              Sponsors
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <EsdcIntro />
    <ImportantDates/>
    </>
  );
}

