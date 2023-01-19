import "../style/password.css";
import NavBar from "./navigation/navbar";

const PasswordReset = () => {
  return (
    <>
      <NavBar />
      <div className="updatePassword">
        <div>
          <h1>Password Reset</h1>
          <form>
            <input type="password" placeholder="New Password" required />
            <br />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
