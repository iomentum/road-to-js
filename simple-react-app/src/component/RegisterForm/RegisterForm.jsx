import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <form>
      <div className="container">
        <h1>Parlez-nous un peu de vous</h1>
        <p>Completez les champs ci-dessous</p>
        <hr />

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enterez votre adresse email"
          name="email"
          required
        />

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enterez votre adresse email"
          name="email"
          required
        />

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enterez votre adresse email"
          name="email"
          required
        />

        <button type="submit" className="signupbtn">
          S'inscrire
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
