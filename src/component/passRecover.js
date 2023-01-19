import "../style/password.css";
import NavBar from "./navigation/navbar";

const PassRecover = () => {
  return (
    <>
      <NavBar />
      <section className="password">
        <div className="passwordRecovery">
          <h1>Password Recovery</h1>
          <h2>
            Enter your E-mail and we will
            <br /> send you a reset
          </h2>
          <form>
            <input type="email" placeholder="E-mail Adress" required />
            <button type="submit">Verify</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PassRecover;
