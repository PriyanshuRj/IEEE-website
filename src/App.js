import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Organizers from "./pages/Organizers";
import History from "./pages/History";
import TrackChair from "./pages/TrackChair";
import Policies from "./pages/Policies";
import Program from "./pages/Program";
import Tutorial from "./pages/Tutorial";
import KeyNote from "./pages/KeyNote";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Fragment } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Fragment>
<Router>

   
      <Header/>
     
      
 
    <Routes>

      <Route esact path="/" element={<Home />}></Route>
      <Route exact path="/organizer" element={<Organizers />} />
      <Route exact path="/history" element={ <History />} />
      <Route exact path="/trackchair" element={<TrackChair />} />
      <Route exact path="/polices" element={<Policies />} />
      <Route exact path="/keynote" element={<KeyNote />} />
      <Route exact path="/tutorial" element={<Tutorial />} />
      <Route exact path="/Program" element={<Program />} />

      {/* <Route exact path="/organizer" element={<Organizers />} /> */}
 
       
     

    </Routes>

    <Footer/>
</Router>
    </Fragment>
  );
}

export default App;
