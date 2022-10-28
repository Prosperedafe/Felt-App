import Style from "../style/faq.css";
import Chat2 from "../images/chatsvg2.svg";
import Chat3 from "../images/chatsvg3.svg";
import NavBar from "../component/navigation/mainNav";
import Cancel from "../images/cancel-text.svg";
import data from "./faqData";
import { useState } from "react";

const Faqs = () => {
  const {answer} = data;
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
          <div className="chat__logo">
            <img src={Chat3} />
            <img src={Chat2} />
            <img src={Chat3} />
          </div>
        </div>
        <section className="questions">
          <div className="box">
            {/* {answer.map((answers) => (
            <button onClick={handleClick}>{answers.question}</button>

            ) )} */}
            <p
              style={{
                transform: isActive ? "scale(0)" : "scale(1)",
              }}
            >
              {/* <img onClick={handleClick} src={questions.hide} alt="cancel" /> */}
            </p>
          </div>
         
        </section>
      </section>
    </>
  );
};

export default Faqs;
