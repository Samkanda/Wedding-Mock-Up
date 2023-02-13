import Nav from './components/Nav';
import Main from './components/Main';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Services/>
      <Gallery/>
      <About/>
      <Social/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
