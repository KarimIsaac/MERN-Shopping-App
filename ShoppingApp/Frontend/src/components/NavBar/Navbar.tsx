import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import './Navbar.css'
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";

export default function Navbar() {
  return (
    <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/profile"> profile </Link>
          <Link to="/createpost"> Create Post </Link>
          <Link to="/createpost"> Create Post </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
  )
}
