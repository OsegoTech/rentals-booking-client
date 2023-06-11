import { useContext, useState,  } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import axios from "axios";
import "./login.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, user, dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const response = await axios.post("http://localhost:8800/api/auth/login", credentials);
            dispatch({type: "LOGIN_SUCCESS", payload: response.data})
            navigate("/");
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
        }
    }

    console.log(user);
  return <div className="login">
    <div className="lContainer">
        <input type="text" className="lInput" placeholder="username" id="username" onChange={handleChange}/>
        <input type="password" className="lInput" placeholder="password" id="password" onChange={handleChange}/>
        <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
        {error && <span className="error">{error.message}</span>}
    </div>
  </div>;
}
