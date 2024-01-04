import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import StudyMaterial from "./studyMaterial/StudyMaterial";
import Courses from "./courses/Courses";
import VideoPlayer from "./videos/Videos";
import MockTest from "./mockTest/MockTest";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    var userId = localStorage.getItem("userId");
    if (userId) {
      setIsLoggedIn(true);
      setUsername(username);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, []);
  const handleLogin = (username) => {
    // var userId = localStorage.getItem("userId");
    // if (userId) {
    setIsLoggedIn(true);
    setUsername(username);
    // }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
  };

  return (
    <>
      <div>
        <Router>
          <NavBar
            isLoggedIn={isLoggedIn}
            username={username}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/" element={<Home />} />
            <Route path="/Material" element={<StudyMaterial />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/video" element={<VideoPlayer />} />
            <Route path="/test" element={<MockTest />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
