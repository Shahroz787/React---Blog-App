import React from "react";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import Home from "./Components/Pages/Home/Home";
import Single from "./Components/Pages/Single/Single";
import Write from "./Components/Pages/Write/Write";
import Settings from "./Components/Pages/Settings/Settings";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import About from "./Components/Pages/About/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Pages/Contact/Contact";

const App = () => {
  const user = false;

  return (
    <Router>
      <TopNavbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route
          exact
          path="/settings"
          element={user ? <Settings /> : <Register />}
        />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route exact path="/post/:postid" element={<Single />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
