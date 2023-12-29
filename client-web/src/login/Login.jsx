// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./Login.css";
import Lottie from "lottie-react";
import lot from "../assets/Animation - 1703879061416.json";
// import { BASE_URL_FE } from "../src/camponents/base";

export default function Login() {
  //   const history = useNavigate();

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   axios.defaults.withCredentials = true;

  // async function submit(e) {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .post(`${BASE_URL_FE}/login`, {
  //         email,
  //         password,
  //       })
  //       .then((res) => {
  //         if (res.data.exists == "exists") {
  //           history("/");
  //         } else if (res.data == "notExists") {
  //           alert("Wrong Username or Password");
  //         }
  //       })
  //       .catch((e) => {
  //         alert("wrong details");
  //         console.log(e);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <div className="login flex flex-col justify-center items-center md:flex-row h-[100vh] md:flex-col">
        <div className="w-[100%] text-center mb-6">
          <h3 className="text-indigo-800 font-extrabold text-3xl">Login</h3>
        </div>
        <div>
          <div className="lot w-full mb-5 flex justify-center items-center">
            <Lottie animationData={lot} loop={true} className="lg:flex w-3/4" />
          </div>
          <div className="form w-full flex justify-center items-center">
            <form
              className="w-3/4 Form flex flex-col justify-center items-center"
              action="/login"
              method="post"
              autoComplete="off"
            >
              <div className="w-[100%] inputBox flex flex-col mt-5">
                <input
                  className="border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-none border-solid border-2 rounded-xl 
                py-3 pl-3 text-xs  bg-indigo-200  text-indigo-700 placeholder-indigo-700 md:text-base"
                  type="text"
                  name="username"
                  id="username"
                  // onChange={(e) => {
                  //   //   setEmail(e.target.value);
                  // }}
                  placeholder="E-mail"
                  required="required"
                />
              </div>
              <div className="w-[100%] inputBox flex flex-col mt-3">
                <input
                  className="w-[100%] border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-none border-solid border-2 rounded-xl p-1
                py-3 pl-3 text-xs  bg-indigo-200  text-indigo-700 placeholder-indigo-700 md:text-base"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  // onChange={(e) => {
                  //   //   setPassword(e.target.value);
                  // }}
                  required="required"
                />
              </div>
              <input
                className="  mt-7 w-[100%] border-solid border-2 rounded-2xl p-2 px-8 bg-indigo-800 text-white cursor-pointer"
                type="submit"
                value="Login" /*onClick={submit}*/
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
