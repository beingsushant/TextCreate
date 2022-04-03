import React from 'react';
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

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
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