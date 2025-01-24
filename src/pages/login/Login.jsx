import { useState } from "react";
import axios from "axios";
import "./Login.css";
import Header from "../../components/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      const token = response.data.token;
      setToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          {error && (
            <div
              style={{ color: "red", textAlign: "center", marginTop: "30px" }}
            >
              {error}
            </div>
          )}
          {token && (
            <div
              style={{ color: "green", textAlign: "center", marginTop: "30px" }}
            >
              Logged in successfully!
            </div>
          )}
        </form>

        <a style={{ color: "blue", textAlign: "center", marginTop: "40px" }} href="/register">Já tenho uma conta</a>
      </div>
    </>
  );
}
