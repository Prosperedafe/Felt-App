import "../teacher/profile.css";
import PhoneIcon from "../../images/phone-icon.svg";
import EmailIcon from "../../images/email-icon.svg";
import LocationIcon from "../../images/location-icon.svg";
import ArrowIcon from "../../images/arrow-up-down.png";
import CVdownload from "../../images/cv-download.svg";
import Editlogo from "../../images/edit-pencil.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const ParentProfile = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen((current) => !current);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((current) => !current);
  };

  const person = {
    name: "prosper",
  };

  return (
    <>
      <main id="my__Profile">
        <section className="my__Dp">
          <Link to="/edit">
            <button className="profile-edit">
              <img src={Editlogo} alt="edit" />
              <span>EDIT</span>
            </button>
          </Link>
          <img className="profile__picture" alt={person.name} />
        </section>
        <section className="my__details">
          <div className="my__name">
            <div>
              <h1 id="name">prosper edafe</h1>
              <p id="status">
                <span>.</span>
              </p>
            </div>
            <button className="connect">CONNECT</button>
          </div>
          <p className="about__me"></p>
        </section>
        <section className="my-contact">
          <div className="my-contact__phone">
            <h2>
              <img src={PhoneIcon} alt="" />
              <span>Phone Number</span>
            </h2>
            <p id="phone__number"></p>
          </div>
          <div className="my-contact__email">
            <h2>
              <img src={EmailIcon} alt="email" />
              <span>Email Address</span>
            </h2>
            <p id="email__adress"></p>
          </div>
          <div className="my-contact__location">
            <h2>
              <img src={LocationIcon} alt="location" />
              <span>Location</span>
            </h2>
            <p id="location__adress">lagos</p>
          </div>
        </section>
        <section className="qualifications">
          <section onClick={handleClick} className="education-background">
            <div className="open-menu">
              <h1>EDUCATIONAL BACKGROUND</h1>
              <img
                src={ArrowIcon}
                className="toggleOpener"
                style={{
                  transform: isActive ? "rotate(0deg)" : "rotate(180deg)",
                }}
                alt="arrow"
              />
            </div>
            {isActive && (
              <table
                style={{
                  display: isActive ? "block" : "none",
                }}
              >
                <tbody>
                  <tr>
                    <td>SSCE</td>
                    <td>2001-2007</td>
                    <td>Umbrella Grammar School</td>
                  </tr>
                  <tr>
                    <td>SSCE</td>
                    <td>2001-2007</td>
                    <td>Umbrella Grammar School</td>
                  </tr>
                  <tr>
                    <td>SSCE</td>
                    <td>2001-2007</td>
                    <td>Umbrella Grammar School</td>
                  </tr>
                </tbody>
              </table>
            )}
          </section>
          <section onClick={handleChange} className="work-experience">
            <div className="open-menu">
              <h1>WORK EXPERIENCE</h1>
              <img
                src={ArrowIcon}
                className="toggleOpener"
                style={{
                  transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
                }}
                alt="arrow"
              />
            </div>
            {isOpen && (
              <table
                id="experience"
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                <tbody>
                  <tr>
                    <td>SSCE</td>
                    <td>2001-2007</td>
                    <td>Umbrella Grammar School</td>
                  </tr>
                  <tr>
                    <td>SSCE</td>
                    <td>2001-2007</td>
                    <td>Umbrella Grammar School</td>
                  </tr>
                  <tr>
                    <td>SSCE</td>
                    <td>2001-2007</td>
                    <td>Umbrella Grammar School</td>
                  </tr>
                </tbody>
              </table>
            )}
          </section>
          <section onClick={handleOpen} className="CV">
            <div className="open-menu">
              <h1>CV</h1>
              <img
                style={{
                  transform: open ? "rotate(0deg)" : "rotate(180deg)",
                }}
                src={ArrowIcon}
                className="toggleOpener"
                alt="arrow"
              />
            </div>

            {open && (
              <div className="CV__download">
                <div>
                  <span>PDF</span>
                  <img src={CVdownload} alt="cv" />
                </div>
              </div>
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default ParentProfile;
