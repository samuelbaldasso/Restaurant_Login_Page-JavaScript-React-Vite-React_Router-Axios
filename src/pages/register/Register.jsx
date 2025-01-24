import { useState } from "react";
import axios from "axios";
import './Register.css';
import Header from "../../components/Header";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/signup", {
        email,
        password,
        fullName
      });
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
          Full Name:
          <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
        {error && <div style={{ color: "red", textAlign: "center", marginTop: "30px" }}>{error}</div>}
      </form>
    </div>

    <div className="back">
      <a style={{ color: "blue", textAlign: "center", marginTop: "120px" }} href="/">Voltar para login</a>
    </div>
   </>
  );
}