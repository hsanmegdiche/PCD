import React, { useState, useContext } from "react";
import axios from "axios";
import { GlobalState } from "./GlobalState";

function Form() {
  const state = useContext(GlobalState);

  // States for registration
  const [git, setGit] = useState("");
  const [num, setNum] = useState("");

  // States for checking the errors

  // Handling the name change
  const handleGit = (e) => {
    setGit(e.target.value);
  };

  // Handling the email change
  const handleNum = (e) => {
    setNum(e.target.value);
  };

  // Handling the password change

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const [id] = await state.userApi.id;

      await axios.post("/user/update", {
        id: id,
        github: git,
        phone: num,
      });
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="form">
      <div>
        <h1>Complete Profile</h1>
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Git</label>
        <input onChange={handleGit} className="input" value={git} type="text" />

        <label className="label">Num</label>
        <input onChange={handleNum} className="input" value={num} type="text" />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
