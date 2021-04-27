import React, { useState, useEffect } from "react";
import "./RegisterForm.css";
import Field from "../Fields/Field";

const RegisterForm = () => {
  const [, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [, setFavComics] = useState("");
  const [, setFavCarBrand] = useState("");
  const [gender, setGender] = useState(undefined);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (gender === "male") return setColor("dodgerblue");
    else if (gender === "female") return setColor("pink");

    return setColor("black");
  }, [gender]);

  return (
    <form>
      <div className="container">
        <h1 style={{ color: color }}>Parlez-nous un peu de vous</h1>
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

        <label for="email">
          <b>Sexe</b>
        </label>
        <select
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </select>

        <button type="submit" className="signupbtn">
          S'inscrire
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
