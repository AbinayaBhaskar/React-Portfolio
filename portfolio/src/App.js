import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
