import "../style/password.css";
import NavBar from "../component/navigation/mainNav";
import { Navigate } from "react-router-dom";

const Token = ({ authorized })  => {
    return (
        <>
        <NavBar/>
        <form className="verify">
           <input type="number" max="1" />
           <input type="number" />
           <input type="number" />
           <input type="number" />
           <input type="number" />
           <input type="number" />
        </form>
        </>
    )
}

export default Token;