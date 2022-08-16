import React from "react";
import { useState } from "react";

export const VotePlace = ({ selectedId, setChoosedId }) => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");

  const [error, setError] = useState("null");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const vote = Number(selectedId);
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
      setChoosedId("");
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
        <label>Family:</label>
        <input
          type={Text}
          onChange={(e) => {
            setFamily(e.target.value);
          }}
          value={family}
        />

        <label>Vote:</label>
        <input type={Number} value={selectedId} />
        <button>Submit</button>
      </form>
    </div>
  );
};
