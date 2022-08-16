import React from "react";
import { useState } from "react";

export const AddNominate = () => {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("null");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const yourVote = { name, family, vote };
    const response = await fetch("/voting", {
      method: "POST",
      body: JSON.stringify(yourVote),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("new workout added", json);
      setName("");
      setFamily("");
      setVote("");
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Name:</label>
        <input
          type={Text}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <label>Pic:</label>
        <input
          type={Text}
          onChange={(e) => {
            setPic(e.target.value);
          }}
          value={pic}
        />
        <label>Age:</label>
        <input
          type={Text}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
        />

        <label>Id:</label>
        <input
          type={Number}
          onChange={(e) => {
            setId(e.target.value);
          }}
          value={id}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
