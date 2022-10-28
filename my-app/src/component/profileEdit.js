import PhoneIcon from "../images/phone-icon.svg";
import EmailIcon from "../images/email-icon.svg";
import LocationIcon from "../images/location-icon.svg";
import Style from "../style/profileEdit.css";
import { useState } from "react";

const EditProfile = () => {
  return (
    <>
      <form id="form1" className="about-form" autoComplete="on">
        <div className="contact">
          <div className="contact-box">
            <img src={PhoneIcon} />
            <label htmlFor="Phone Number">Phone Number</label> <br />
            <input type="tel" />
          </div>

          <div className="contact-box">
            <img src={EmailIcon} />
            <label htmlFor="email">Email Address</label> <br />
            <input type="email" />
          </div>

          <div className="contact-box">
            <img src={LocationIcon} />
            <label htmlFor="Location">Location</label> <br />
            <input type="text" />
          </div>
        </div>

        <section className="education">
          <h1>EDUCATIONAL BACKGROUND</h1>
          <input className="full-width" type="text" placeholder="School Name" />
          <br />
          <div className="grid-cols">
            <input
              className="small-cols"
              type="date"
              placeholder="Start date"
            />
            <input className="small-cols" type="date" placeholder="End date" />
            <input className="small-cols" type="text" placeholder="Degree" />
          </div>
          <br />
          <input className="full-width" type="text" placeholder="Course" />
        </section>

        <section className="experience">
          <h1>WORK EXPERIENCE</h1>
          <input className="full-width" type="" placeholder="" />
          <br />
          <div className="grid-cols">
            <input type="" placeholder="" />
            <input type="" placeholder="" />
            <input type="" placeholder="" />
          </div>
          <br />
          <input className="full-width" type="" placeholder="" />
        </section>
        <section className="work-cv">
          <h1>CV</h1>
          <input id="fileInput" type="file" placeholder="Upload CV" />
        </section>
        <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
};

export default EditProfile;
