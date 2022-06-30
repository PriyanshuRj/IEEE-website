import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Organizers from "./pages/Organizers";
import TrackChair from "./pages/TrackChair";
import Program from "./pages/Program";
import Tutorial from "./pages/Tutorial";
import KeyNote from "./pages/KeyNote";
import OtherComitee from "./pages/OtherComitee";
import TechnicalCommitee from "./pages/TechnicalCommitee";
import Author from "./pages/Author";
import SponsersOppurtunities from "./pages/SponsersOppurtunities";
import CurrentSponsers from "./pages/CurrentSponsers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route esact path="/" element={<Home />}></Route>
          <Route exact path="/organizer" element={<Organizers />} />
          <Route exact path="/trackchair" element={<TrackChair />} />
          <Route exact path="/keynote" element={<KeyNote />} />
          <Route exact path="/tutorial" element={<Tutorial />} />
          <Route exact path="/program" element={<Program />} />
          <Route exact path="/technical" element={<TechnicalCommitee />} />
          <Route exact path="/other" element={<OtherComitee />} />
          <Route exact path="/author" element={<Author />} />
          <Route exact path = "/sponsersOppurtunities" element={<SponsersOppurtunities />} />
          <Route exact path = "/currentSponsers" element={<CurrentSponsers />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
