import "../styles/Header.css";
import profilePicture from "../assets/profile-picture.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Header = () => {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} alt="" />
        <h3>Fauki Rijatul H</h3>
        <p>Programmer - Web Developer - Learner</p>
        <div className="socialMedia">
          <a href="">
            <SlSocialLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FiFacebook />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
          <a href="">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
