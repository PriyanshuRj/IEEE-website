import Container from "react-bootstrap/Container";
import {useRef,useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "../Styles/Header.module.css";
import {Link} from "react-router-dom";
export default function Header() {
  const [ComiteeShow,setComiteeShow] = useState(false);
  const [ComiteeShowBtn,setComiteeShowBtn] = useState(false);
  const [ProgramShow,setProgramShow] = useState(false);
  const [ProgramShowBtn,setProgramShowBtn] = useState(false);
  const [AboutShow,setAboutShow] = useState(false);
  const [AboutShowBtn,setAboutShowBtn] = useState(false);
  function ComiteeBtn(){
    setComiteeShowBtn(prevState => !prevState);
  }
  function AboutBtn(){
    setAboutShowBtn(prevState => !prevState);
  }
  function ProgramBtn(){
    setProgramShowBtn(prevState => !prevState);
  }
  function setIsShown(val){
    setComiteeShow(val);
  }
  function setIsShownAbout(val){
    setAboutShow(val);
    
  }
  function setIsShownProgram(val){
    setProgramShow(val);
  }
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
                className={Styles.navItem + " show h5"}  
                show={ComiteeShowBtn || ComiteeShow}
                title="Committee"
                id="basic-nav-dropdown"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => ComiteeBtn()}
              >
                
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <Link to="/organizer">
                <NavDropdown.Item href="/organizer">
                Orgainizing Committee
                </NavDropdown.Item>
                </Link>
                <Link to="/technical">

                <NavDropdown.Item href="/">
                Technical Programming Committee
                </NavDropdown.Item>
                </Link>
                <Link to="/other">

                <NavDropdown.Item href="/">
                Other Committee
                </NavDropdown.Item>
                </Link>
                
              </NavDropdown>

              <NavDropdown
                className={Styles.navItem + "  h5"}
                title="About"
                id="basic-nav-dropdown"
                show={ AboutShowBtn || AboutShow}
                onMouseEnter={() => setIsShownAbout(true)}
                onMouseLeave={() => setIsShownAbout(false)}
                onClick={() => AboutBtn()}
              >
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <Link to="/organizer">
                <NavDropdown.Item href="/organizer">
                  Organizers
                </NavDropdown.Item>
                </Link>
                <Link to="/history">

                <NavDropdown.Item href="/">
                  History
                </NavDropdown.Item>
                </Link>
                <Link to="/trackchair">

                <NavDropdown.Item href="/">
                  Track Chairs
                </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to="polices">

                <NavDropdown.Item href="/">
                  IEEE Policies
                </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                className={Styles.navItem + "  h5"}
                title="Programs"
                id="basic-nav-dropdown"
                show={ProgramShowBtn || ProgramShow}
                onMouseEnter={() => setIsShownProgram(true)}
                onMouseLeave={() => setIsShownProgram(false)}
                onClick={()=>ProgramBtn()}
              >
                <NavDropdown.Item href="/">Program</NavDropdown.Item>
                <Link to="/program">
                
                <NavDropdown.Item href="/">
                  Confrence Program
                </NavDropdown.Item>
                </Link>
                <Link to="keynote">

                <NavDropdown.Item href="/">
                  Keynotes
                </NavDropdown.Item>
                </Link>
                <Link to="tutorial">

                <NavDropdown.Item href="/">
                  Tutorial
                </NavDropdown.Item>
                </Link>
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
