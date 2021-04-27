import React, { useState } from "react";
import "./RegisterForm.css";
import Field from "../Fields/Field";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [favComics, setFavComics] = useState("");
  const [favCarBrand, setFavCarBrand] = useState("");

  return (
    <form>
      <div className="container">
        <h1>Parlez-nous un peu de vous</h1>
        <p>Completez les champs ci-dessous</p>
        <hr />

        <Field label="Nom complet" setField={setFullName} />
        <Field label="Age" type="number" setField={setAge} />

        {age ? (
          age >= 18 ? (
            <Field label="Marque de voiture préféré" setField={setFavComics} />
          ) : (
            <Field label="Dessin animé préféré" setField={setFavCarBrand} />
          )
        ) : (
          []
        )}

        <button type="submit" className="signupbtn">
          S'inscrire
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
