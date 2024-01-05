import PropTypes from "prop-types";
import logo from "../assets/Navbar/app_icon.png";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = ({ isLoggedIn, username, onLogout }) => (
  <div className="h-[80px] flex w-full shadow-md top-0 z-2 overflow-hidden justify-between">
    <img className="h-10 w-10 mx-5 my-5" src={logo} alt="logo" />
    <div className="hidden md:flex justify-between">
      <ul className="flex flex-row ml-[160px] text-[20px]">
        <a href="/">
          <li className="mx-6 mt-6 hover:font-semibold">Home</li>
        </a>
        <a href="/course">
          <li className="mx-6 mt-6 hover:font-semibold">Courses</li>
        </a>
        <a href="/">
          <li className="mx-6 mt-6 hover:font-semibold">Contact</li>
        </a>
      </ul>
    </div>
    <div className="flex">
      {isLoggedIn ? (
        <div className="my-6 md:my-6 flex justify-center items-center">
          {username !== "" && (
            <span className="mr-4">Welcome, {username}!</span>
          )}
          <button
            className="rounded-full h-[35px] w-[80px] md:h-[40px] md:w-[120px] border border-1 border-black hover:bg-slate-400 hover:text-white/100 hover:border-none transition duration-150"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="my-6 md:my-6 flex justify-center items-center">
          <a href="/login">
            <button className="rounded-full h-[35px] w-[80px] md:h-[40px] md:w-[120px] border border-1 border-black hover:bg-slate-400 hover:text-white/100 hover:border-none transition duration-150">
              <p>Login</p>
            </button>
          </a>
        </div>
      )}
      <HiMenuAlt3 className="flex md:hidden h-8 w-8 mx-5 my-6 md:my-5" />
    </div>
  </div>
);

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
