import "./faq.css";
import NavBar from "../component/navigation/mainNav";
import Cancel from "../images/cancel-text.svg";
import data from "./faqData";
import { useState } from "react";

const Faqs = () => {

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive((current) => !current);
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
          {data.answers.map((faq) => (
            <div className="box" key={faq.id}>
              <p
                style={{
                  display: isActive ? "none" : "block"
                }}
              >
                <img src={Cancel} onClick={handleClick}/>
                {faq.answer}
                </p>
              <button onClick={handleClick}>{faq.question}</button>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Faqs;
