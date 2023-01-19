import "./faq.css";
import NavBar from "../component/navigation/navbar";
import Cancel from "../images/cancel-text.svg";
import faqData from "./faqData";
import { useState } from "react";

const Faqs = () => {

  const [faq, setFaq] = useState();
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e, faq) => {
    setFaq(faq);
    setIsActive(!isActive)
  };

  return (
    <>
      <NavBar />
      <section id="faqs">
        <div className="intro-board">
          <div>
            <h1>Have Questions?</h1>
            <p>We've got the answers...</p>
          </div>
        </div>
        <section className="questions">
          {faqData.map((faq, index) => (
            <div className="box" onClick={(e) => handleClick(e, faq)}
              key={faq.id}>
              <button onClick={() => setIsActive(!isActive)}>{faq.question}</button>
            </div>
          ))}
          {isActive && (
            <p className="questions__p">
              <img src={Cancel} onClick={() => setIsActive(!isActive)} alt="cancel" />
              {faq.answer}
            </p>)}
        </section>
      </section>
    </>
  );
};

export default Faqs;
