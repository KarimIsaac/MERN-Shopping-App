import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import './Navbar.css'
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import Pancakes from "../../pages/Pancakes/Pancakes";
import Cart from "../../pages/Cart/Cart";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export default function Navbar() {
  return (
    <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/pancakes"> Pancakes</Link>
          <Link to="/juice"> Juice </Link>
          <Link to="/login"> Login </Link>
          <Link to="/cart"> Cart </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/pancakes" element={<Pancakes />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </Router>
  )
}
