import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Author from "./components/Authors";
import Hero from "./components/Hero";
import Program from "./components/Programs";
import Speakers from "./components/Speakers";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  return (
    <div >
      <Header/>
      <div className="">


      <Hero />
      <About />
      <Author />
      <Speakers />
      <Program />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
