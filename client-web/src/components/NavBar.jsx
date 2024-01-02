
import PropTypes from "prop-types";
import logo from "../assets/Navbar/app_icon.png";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = ({ isLoggedIn, username, onLogout }) => (
  <div className="h-[80px] flex w-full shadow-md top-0 z-2 overflow-hidden justify-between">
    <img className="h-10 w-10 mx-5 my-5" src={logo} alt="logo" />
    <div className="hidden md:flex justify-between">
      <ul className="flex flex-row ml-[160px]">
      </ul>
    </div>
    <div className="flex">
      <button>
        <CiSearch className=" h-8 w-8 my-6 md:mx-5 md:my-5" />
      </button>
      {isLoggedIn ? (
        <div className="my-6 md:my-6 flex justify-center items-center">
          <span className="mr-4">Welcome, {username}!</span>
          <button className="rounded-full h-[35px] w-[80px] md:h-[40px] md:w-[120px] border border-1 border-black hover:bg-slate-400 hover:text-white/100 hover:border-none transition duration-150" onClick={onLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="my-6 md:my-6 flex justify-center items-center">
          <button className="rounded-full h-[35px] w-[80px] md:h-[40px] md:w-[120px] border border-1 border-black hover:bg-slate-400 hover:text-white/100 hover:border-none transition duration-150">
            <a href="/login">Login</a>
          </button>
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