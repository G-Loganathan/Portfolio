import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Services from "./components/Services/Services.jsx";
import Contacts from "./components/Contact/Contacts.jsx";


function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contacts />
    </div>
  );
}

export default App;