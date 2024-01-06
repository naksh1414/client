import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import StudyMaterial from "./studyMaterial/StudyMaterial";
import Courses from "./courses/Courses";
import VideoPlayer from "./videos/Videos";
import MockTest from "./mockTest/MockTest";
import NavBar from "./components/NavBar";
import Ebooks from "./Ebooks/Ebook";
import Tests from "./Tests/Test";
import MockTest_name from "./mockTest/MockTest_name";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const mockTest_id = localStorage.getItem("mockTest_id");
  const mockTest_id_test_id = localStorage.getItem("mockTest_id_test_id");
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
            <Route path="/material" element={<StudyMaterial />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/video" element={<VideoPlayer />} />
            <Route
              path={`/tests/${mockTest_id}/${mockTest_id_test_id}`}
              element={<MockTest />}
            />
            <Route path="/material/ebooks" element={<Ebooks />} />
            <Route path="/tests" element={<Tests />} />
            <Route path={`/tests/${mockTest_id}`} element={<MockTest_name />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
