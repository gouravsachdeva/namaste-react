import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const checkOnline = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 flex items-center">
            Online Status: {checkOnline ? "🟢" : "🔴"}
          </li>
          <li className="px-4 flex items-center">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 flex items-center">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 flex items-center">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 flex items-center">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 flex items-center">Cart</li>
          <li className="px-4 flex items-center">
            <button
              className="text-white font-bold bg-black p-2"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 font-bold flex items-center">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
