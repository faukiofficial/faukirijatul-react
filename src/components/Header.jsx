import "../styles/Header.css";
import profilePicture from "../assets/profile.jpg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Header = () => {
  return (
    <header>
      <div className="header-jumbotron">
        <img className="profile" src={profilePicture} alt="profile" />
        <h3>Fauki Rijatul H</h3>
        <p>Programmer - Web Developer - Learner</p>
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/fauki-rijatul-h-9a93ab251/" target="_blank" rel="noopener noreferrer">
            <SlSocialLinkedin />
          </a>
          <a href="https://github.com/faukiofficial" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/faukiofficial/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/faukiofficial" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://x.com/faukiofficial" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://wa.me/6287845352397" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
