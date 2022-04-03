import { React, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextCreate from './TextCreate';
import About from './About';
import Navbar from './Navbar1';
import Career from './Career';
import Contact from './Contact';
import { Alert } from 'bootstrap';


function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "Black";
      document.body.style.color = "White";
      setMode("dark")
      alert("Dark Mode Enabled");
    }
    else {
      document.body.style.backgroundColor = "White";
      document.body.style.color = "Black";
      setMode("light")
      alert("Light Mode Enabled");
    }
  }


  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Switch>
        <Route exact path="/About" element={<About />}>
        </Route>
        <Route exact path="/Home" element={<TextCreate />}>
        </Route>
        <Route exact path="/Career" element={<Career />}>
        </Route>
        <Route exact path="/Contact" element={<Contact />}>
        </Route>
      </Switch>
    </Router>
  )
}

export default App