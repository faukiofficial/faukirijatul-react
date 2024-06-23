import "../styles/Navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [statusTampil, setStatusTampil] = useState("");

  const tampilMenu = () => {
    if (statusTampil == "") {
      setStatusTampil("tampil");
    } else {
      setStatusTampil("");
    }
  };
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">FaukiRijatul</a>
        </div>
        <button onClick={tampilMenu}>
          {statusTampil == "" ? <FaBars /> : <RiCloseLargeFill />}
        </button>
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <a href="#portofolio">Portofolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
