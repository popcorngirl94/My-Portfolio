
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Footer} from './components/Footer';
import {Contact} from './components/Contact';
import {Education} from './components/Education';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
     <Skills />
     <Education />
     <Projects />
     <Footer />
     <Contact />
     
     
    </div>
  );
}

export default App;
