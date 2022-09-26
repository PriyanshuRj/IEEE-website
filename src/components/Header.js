import Container from "react-bootstrap/Container";
import { useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "../Styles/Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  const [ComiteeShow, setComiteeShow] = useState(false);
  const [ComiteeShowBtn, setComiteeShowBtn] = useState(false);
  const [ProgramShow, setProgramShow] = useState(false);
  const [ProgramShowBtn, setProgramShowBtn] = useState(false);
  const [SponsersShow, setSponsersShow] = useState(false);
  const [SponsersShowBtn, setSponsersShowBtn] = useState(false);
  function ComiteeBtn() {
    setComiteeShowBtn((prevState) => !prevState);
    setSponsersShowBtn(false);
    setProgramShowBtn(false);
    setSponsersShow(false);
    setProgramShow(false);
  }
  function SponsersBtn() {
    setSponsersShowBtn((prevState) => !prevState);
    setProgramShowBtn(false);
    setProgramShow(false);
    setComiteeShowBtn(false);
    setComiteeShow(false);
  }
  function ProgramBtn() {
    setProgramShowBtn((prevState) => !prevState);
    setComiteeShowBtn(false);
    setComiteeShow(false);
    setSponsersShow(false);
    setSponsersShowBtn(false);
  }
  function setIsShown(val) {
    setComiteeShow(val);
    setSponsersShowBtn(false);
    setProgramShowBtn(false);
    setSponsersShow(false);
    setProgramShow(false);
  }
  function setIsShownSponsers(val) {
    setSponsersShow(val);
    setProgramShowBtn(false);
    setProgramShow(false);
    setComiteeShowBtn(false);
    setComiteeShow(false);
  }
  function setIsShownProgram(val) {
    setProgramShow(val);
    setComiteeShowBtn(false);
    setComiteeShow(false);
    setSponsersShow(false);
    setSponsersShowBtn(false);
  }
  return (
    <>
      <Navbar expand="lg" className={Styles.navdiv}>
        <Container fluid>
          <Link to="/">
            <Navbar.Brand href="/" className={Styles.navHead}>
              IEEE
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-center"
              style={{ minHeight: "50px", width: "100%", color: "black" }}
              navbarScroll
            >
              <Link to="/">
                <Nav.Link className={Styles.navItem + " h5 " } href="/">
                  Home
                </Nav.Link>
              </Link>
              <NavDropdown
                className={Styles.navItem + " show h5"}
                show={ComiteeShowBtn || ComiteeShow}
                title="Committee"
                id="basic-nav-dropdown"
                onMouseEnter={() => setIsShown(true)}
                
                onClick={() => ComiteeBtn()}
              >
                <div
                onMouseLeave={() => setIsShown(false)}
                onClick={() => ComiteeBtn()}
                >


                <Link to="/organizer">
                  <NavDropdown.Item href="/organizer">
                    Orgainizing Committee
                  </NavDropdown.Item>
                </Link>
                <Link to="/technical">
                  <NavDropdown.Item href="/">
                    Technical Program Committee
                  </NavDropdown.Item>
                </Link>
                <Link to="/other">
                  <NavDropdown.Item href="/">Other Committee</NavDropdown.Item>
                </Link>
                </div>
              </NavDropdown>
              <NavDropdown
                className={Styles.navItem + "  h5"}
                title="Programs"
                id="basic-nav-dropdown"
                show={ProgramShowBtn || ProgramShow}
                onMouseEnter={() => setIsShownProgram(true)}
                
                onClick={() => ProgramBtn()}
              >
                <div
                onMouseLeave={() => setIsShownProgram(false)}
                onClick={() => ProgramBtn()}
                >


                <Link to="/program">
                  <NavDropdown.Item href="/">
                    Track based Conference
                  </NavDropdown.Item>
                </Link>
                <Link to="/keynote">
                  <NavDropdown.Item href="/">Keynotes</NavDropdown.Item>
                </Link>
                <Link to="/tutorial">
                  <NavDropdown.Item href="/">Tutorial</NavDropdown.Item>
                </Link>
                <Link to="/callforpapers">
                  <NavDropdown.Item href="/">Call for Papers</NavDropdown.Item>
                </Link>
                </div>
              </NavDropdown>
              <Link to="/author">
                <Nav.Link className={Styles.navItem + " h5"} href="/">
                  Authors
                </Nav.Link>
              </Link>
              <NavDropdown
                className={Styles.navItem + "  h5"}
                title="Sponsors"
                id="basic-nav-dropdown"
                show={SponsersShowBtn || SponsersShow}
                onMouseEnter={() => setIsShownSponsers(true)}
                
                onClick={() => SponsersBtn()}
              >
                <div
                onMouseLeave={() => setIsShownSponsers(false)}
                onClick={() => SponsersBtn()} >
                  
                <Link to="/sponsersOppurtunities">
                  <NavDropdown.Item href="/">
                    Sponsors Oppurtunities
                  </NavDropdown.Item>
                </Link>
                <Link to="/currentSponsers">
                  <NavDropdown.Item href="/">Current Sponsors</NavDropdown.Item>
                </Link>
                </div>
              </NavDropdown>

              <Link to="/registration">
                <Nav.Link className={Styles.navItem + " h5"} href="/">
                  Registration
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
