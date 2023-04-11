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
import Registration from "./pages/Registration";
import UpperHeader from "./components/UpperHeader";
import Callforpapers from "./pages/Callforpapers";
import Gettinghere from "./pages/Gettinghere";
import TechnicalReview from "./pages/technicalreview";
import Schedule from "./pages/Schedule";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

AOS.init({
  once: true,
});
function App() {
  return (
    <Fragment>
      <UpperHeader />
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
          <Route exact path = "/registration" element={<Registration />} />
          <Route exact path = "/callforpapers" element={<Callforpapers />} />
          <Route exact path = "/gettinghere" element={<Gettinghere />} />
          <Route exact path = "/technicalreview" element = {<TechnicalReview />} />
          <Route exact path = "/schedule" element={<Schedule />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Fragment>
  );
}

export default App;
