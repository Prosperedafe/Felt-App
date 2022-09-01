import React from "react";
import Style from "../style/faq.css";
import Chat2 from "../images/chatsvg2.svg";
import Chat3 from "../images/chatsvg3.svg";
import NavBar from "./mainNav";
import Cancel from "../images/cancel-text.svg";
import { useState } from "react";

const Faqs = () => {
  const [isActive1, setIsActive1] = useState(true);

  const handleClick1 = () => {
    setIsActive1((current) => !current);
  };
  const [isActive2, setIsActive2] = useState(true);

  const handleClick2 = () => {
    setIsActive2((current) => !current);
  };
  const [isActive3, setIsActive3] = useState(true);

  const handleClick3 = () => {
    setIsActive3((current) => !current);
  };
  const [isActive4, setIsActive4] = useState(true);

  const handleClick4 = () => {
    setIsActive4((current) => !current);
  };
  const [isActive5, setIsActive5] = useState(true);

  const handleClick5 = () => {
    setIsActive5((current) => !current);
  };
  const [isActive6, setIsActive6] = useState(true);

  const handleClick6 = () => {
    setIsActive6((current) => !current);
  };
  const [isActive7, setIsActive7] = useState(true);

  const handleClick7 = () => {
    setIsActive7((current) => !current);
  };
  const [isActive8, setIsActive8] = useState(true);

  const handleClick8 = () => {
    setIsActive8((current) => !current);
  };
  const [isActive9, setIsActive9] = useState(true);

  const handleClick9 = () => {
    setIsActive9((current) => !current);
  };
  const [isActive10, setIsActive10] = useState(true);

  const handleClick10 = () => {
    setIsActive10((current) => !current);
  };
  const [isActive11, setIsActive11] = useState(true);

  const handleClick11 = () => {
    setIsActive11((current) => !current);
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
            <button onClick={handleClick1}>What is Felt Teachers?</button>
            <p
              style={{
                transform: isActive1 ? "scale(0)" : "scale(1)",
              }}
            >
              <img onClick={handleClick1} src={Cancel} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick2}>
              What is the maximum connect point i can buy
            </button>
            <p
              style={{
                transform: isActive2 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick2} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick3}>How can i delete my account</button>
            <p
              style={{
                transform: isActive3 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick3} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick4}>How do i sign in?</button>
            <p
              style={{
                transform: isActive4 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick4} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick5}>
              Can i register multiple account?
            </button>
            <p
              style={{
                transform: isActive5 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick5} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick6}>
              How do i buy more connect pionts
            </button>
            <p
              style={{
                transform: isActive6 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick6} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick7}>
              Can i buy more connect points even if i still have some connect
              points remaining
            </button>
            <p
              style={{
                transform: isActive7 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick7} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick8}>How do i upload a video</button>
            <p
              style={{
                transform: isActive8 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick8} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick9}>
              How will i know if am employed
            </button>
            <p
              className="last"
              style={{
                transform: isActive9 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick9} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick10}>How can i take tests</button>
            <p
              className="last"
              style={{
                transform: isActive10 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick10} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
          <div className="box">
            <button onClick={handleClick11}>How can i delete my account</button>
            <p
              className="last"
              style={{
                transform: isActive11 ? "scale(0)" : "scale(1)",
              }}
            >
              <img src={Cancel} onClick={handleClick11} alt="cancel" />
              Felt Teachers offers you a platform to register a Teacher, A
              school owner and a Parent. you can choose any of the options when
              you click on the sign in page and then you complete te formalities
              requested there
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Faqs;
