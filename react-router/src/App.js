import './App.css';

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// pages
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Error404 from './components/Error404';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/users" activeClassName="active">Users</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error404 />} />
            {/* <Route path="/user/:id" element={<User />} /> */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
