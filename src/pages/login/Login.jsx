import { React, useState } from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LOGIN__URL = "https://fakestoreapi.com";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting login form...");
    if (!username.trim() || !password.trim) {
      console.log("Username or password is empty");
      return toast.warn("Please enter username and password");
    }
    setIsLoading(true);
    let user = { username, password };
    axios
      .post(`${LOGIN__URL}/auth/login`, user)
      .then((res) => {
        console.log("Login response:", res);
        toast.success("Login successful");
        localStorage.setItem("token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.error("Login error:", err);
        toast.error("Invalid username or password");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container maxWidth="xl" className="login">
      <br />
      <br />
      <br />
      <div className="links">
        <Link to={"/"}>Home</Link>
        <h4>Login</h4>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          className="email"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <div className="password">
          <TextField
            required
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{ border: "none" }}
          />
          {password && (
            <button
              className="show"
              onClick={() => setShowPassword((p) => !p)}
              type="button"
            >
              {showPassword ? <FaRegEye /> : <ImEyeBlocked />}
            </button>
          )}
        </div>
        <Button
          className="submit"
          type="submit"
          variant="contained"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="waiting">
              <h4>Logging in...</h4>
              <div id="loading"></div>
            </div>
          ) : (
            <h4>Login</h4>
          )}
        </Button>
      </form>
    </Container>
  );
}

export default Login;
