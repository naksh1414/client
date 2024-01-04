import animation from "../assets/contact/Animation - 1704263757717.json";
import Lottie from "lottie-react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handlesubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (isValid) {
      setIsValidEmail(true);
      // Continue with your form submission logic
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setIsValidEmail(false);
      // Handle invalid email case (e.g., show an error message)
      console.error("Invalid email address");
    }
  };
  return (
    <div>
      <div className="mb-[20px] flex justify-center items-center mt-[30px]">
        <h1 className="text-3xl font-semibold text-blue-500">CONTACT US</h1>
      </div>
      <form action="POST" onSubmit={handlesubmit}>
        <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Lottie */}
        <div className="flex w-[300px] md:w-[500px]">
          <Lottie
            animationData={animation}
            loop={true}
            // className="w-[500px] h-[500px]"
          />
        </div>
        {/* Lottie ends */}
        {/* Input fields */}
        <div className="md:mx-[100px]">
          <div className="flex flex-col justify-center items-center mt-8 md:mt-0">
            <div className="flex flex-col">
              <label className="mb-4 mt-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[40px] rounded-xl w-[300px] md:w-[400px] px-2 border-black border-2 "
                placeholder="Enter Name"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="mb-4 mt-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValidEmail(true);
                }}
                className={`h-[40px] rounded-xl w-[300px] md:w-[400px] px-2 border-2 ${
                    isValidEmail ? "border-black" : "border-red-500"
                  } `}
                placeholder="Enter Email"
              ></input>
               {!isValidEmail && (
                <p className="text-red-500 mt-2">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-4 mt-2" htmlFor="message">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" rounded-xl w-[300px] md:w-[400px] px-2 py-4 border-black border-2 "
                placeholder="Enter your Query"
              ></textarea>
              <div className="flex justify-center">
                <button
                  className=" mt-[40px] border-2 border-cyan-700 rounded-xl h-[40px] w-[150px] md:w-[200px] hover:bg-cyan-600 hover:text-white hover:border-none transition-all duration-150 "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Input field ends */}
        </div>
      </form>
      
    </div>
  );
};

export default Contact;
