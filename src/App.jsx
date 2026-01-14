
import './App.css'
// import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './header';
import About from './components/About';
import Project from './components/Projects';
import Skill from './components/Skills';
import Achievement from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return(
    <>
      <Header />
      <main className="pt-16 scroll-smooth">
        <About />
        <Project />
        <Skill />
        <Achievement />
        <Contact />
      </main>
    </>
  );
}