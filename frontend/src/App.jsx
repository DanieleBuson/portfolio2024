import './App.css';
import Banner from './components/Banner';
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <div className='App'>
      <NavbarComponent />
      <Banner />
      <Skills /> 
      <Experiences />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
