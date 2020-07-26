import React, { useState, useEffect } from "react";
import { getUserAccessToken, setUserLocalStorage } from "../utils";
import { Redirect } from "react-router-dom";
import "./Login.css";
const Login = ({ setUser, user }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };
  const handleSubmit = async (ev: React.FormEvent<EventTarget>) => {
    ev.preventDefault();
    try {
      const { data: user_data } = await getUserAccessToken(email, password);
      setUserLocalStorage(user_data);
      console.log(user_data);
      setUser(user_data);
    } catch (err) {
      console.log(err);
      setHasError(true);
    }
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return user ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={handleSubmit} className="Login-container">
      {hasError && <h2>Revisa los datos e intenta nuevamente</h2>}
      <h1>Encontrá los mejores restaurantes</h1>
      <input
        className="Login-input"
        placeholder="email"
        type="email"
        onChange={handleEmailChange}
        value={email}
      />
      <input
        className="Login-input"
        placeholder="password"
        type="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <button className="Login-button">Login</button>
    </form>
  );
};

export default Login;
