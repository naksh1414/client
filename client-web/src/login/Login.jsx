// Login.js
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import NavBar from "../components/NavBar";
import lot from "../assets/login/Animation - 1703879061416.json";
import Lottie from "lottie-react";

const Login = ({ onLogin }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        phone,
        password,
      });

      if (response.data.success) {
        setMessage("Login successful");
        onLogin(response.data.username);
      } else {
        setMessage("Invalid phone number or password");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setMessage("Internal Server Error");
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="absolute md:left-[30%] login flex flex-col justify-center items-center h-[100vh] md:flex-col mt-[-80px] md:mt-[0px]">
        <div className="w-[100%] text-center mb-6">
          <h3 className="text-indigo-800 font-bold text-3xl">Login</h3>
        </div>
        <div>
          <div className="lot w-full mb-5 flex justify-center items-center">
            {/* Your Lottie animation component */}
            <Lottie animationData={lot} loop={true} className="lg:flex w-3/4" />
          </div>
          <div className="form w-full flex justify-center items-center">
            <form
              className="w-3/4 Form flex flex-col justify-center items-center"
              action="/login"
              method="post"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="w-[100%] inputBox flex flex-col mt-5">
                <input
                  className="border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-none border-solid border-2 rounded-xl 
                  py-3 pl-3 text-xs bg-indigo-200 text-indigo-700 placeholder-indigo-700 md:text-base"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required="required"
                />
              </div>
              <div className="w-[100%] inputBox flex flex-col mt-3">
                <input
                  className="w-[100%] border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-none border-solid border-2 rounded-xl p-1
                  py-3 pl-3 text-xs bg-indigo-200 text-indigo-700 placeholder-indigo-700 md:text-base"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required="required"
                />
              </div>
              <input
                className="mt-7 w-[100%] border-solid border-2 rounded-2xl p-2 px-8 bg-indigo-800 text-white cursor-pointer"
                type="submit"
                value="Login"
              />
            </form>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
