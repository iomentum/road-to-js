import React from "react";

const Field = (props) => {
  const { label, type = "text", setField } = props;

  return (
    <div>
      <label for="email">
        <b>{label}</b>
      </label>
      <br />
      <input
        type={type}
        placeholder="Complétez ce champ"
        onChange={(event) => setField(event.target.value)}
      />
    </div>
  );
};

export default Field;
