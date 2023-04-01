import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [numberForm, setNumberForm] = useState("");
  const [display, setDisplay] = useState(0);

  function handleChange(e) {
    let value = e.target.value.replace(/[.,-]/g, "");
    setNumberForm(value);
  }

  function handleInput(e) {
    //please put your logic here
    e.preventDefault();
    let reversed = "";
    for (let i = numberForm.length - 1; i >= 0; i--) {
      reversed += numberForm[i];
    }
    let result = Math.abs(+reversed - +numberForm);
    setDisplay(result);
  }

  return (
    <div className="App">
      <form onSubmit={handleInput}>
        Number:
        <input
          type="number"
          name="number"
          value={numberForm}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>Result: {display}</div>
    </div>
  );
}
