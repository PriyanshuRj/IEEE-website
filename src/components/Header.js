import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import EsdcIntro from "./EsdcIntro";
import ImportantDates from "./ImportantDates";
import Styles from "../Styles/Header.module.css";
export default function Header() {
  return (
    <>
      <Navbar expand="lg" className={Styles.navdiv}>
        <Container fluid>
          <Navbar.Brand href="#" className={Styles.navHead}>
            IEEE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-center"
              style={{ minHeight: "50px", width: "100%", color: "black" }}
              navbarScroll
            >
              <Nav.Link className={Styles.navItem + " h5"} href="#action1">
                Home
              </Nav.Link>
              <NavDropdown
                className={Styles.navItem + "  h5"}
                title="About"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Organizers
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  History
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Track Chairs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  IEEE Policies
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className={Styles.navItem + "  h5"}
                title="Programs"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/">Program</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Confrence Program
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Keynotes
                </NavDropdown.Item>
                
                <NavDropdown.Item href="/">
                  Tutorial
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className={Styles.navItem + " h5"} href="#">
                Authors
              </Nav.Link>
              <Nav.Link className={Styles.navItem + " h5"} href="#">
                Sponsors
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
