import logo from "../../images/Subtract.svg";
import github from "../../images/icons8-github.svg";
import linkedin from "../../images/icons8-linkedin-circled.svg";
import instagram from "../../images/icons8-instagram.svg";
import facebook from "../../images/icons8-facebook.svg";
import twitter from "../../images/icons8-twitter.svg";
import "./navbar.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <span>Felt Teachers</span>
      </div>
      <div className="footer__social-links">
        <p>Connect with us on social media</p>
        <div className="social-links-icons">
          <a
            href="https://github.com/Prosperedafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/edafe-prosper-b046ba239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/mamusedafe19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/prosper.edafe.10"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://twitter.com/ProsperEdafe?t=wcoZQFJM82zEka_bqiTWig&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
