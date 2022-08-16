import React, { useState, useEffect } from "react";
import AdminNominateCart from "../component/AdminNominateCart";
import CreateElection from "../component/CreateElection";

function Admin() {
  const [candid1vote, setCandid1Vote] = useState("");
  const [candid2vote, setCandid2Vote] = useState("");
  const [candid3vote, setCandid3Vote] = useState("");
  const [nominate, setNominate] = useState(null);
  const [choosedID, setChoosedId] = useState("");
  const [choosedClass, setChoosedClass] = useState("");
  const [refreshNominate, setRefreshNominate] = useState(true);

  useEffect(() => {
    const fetchVote = async () => {
      const response = await fetch("/voting/admin/vote");
      const voteArray = await response.json();
      if (response.ok) {
        let vote1 = 0;
        let vote2 = 0;
        let vote3 = 0;
        voteArray.forEach((element) => {
          if (element.vote === 1) {
            vote1 += 1;
          } else if (element.vote === 2) {
            vote2 += 1;
          } else if (element.vote === 3) {
            vote3 += 1;
          }
        });
        setCandid1Vote(vote1);
        setCandid2Vote(vote2);
        setCandid3Vote(vote3);
      }
    };
    const fetchNominate = async () => {
      const response = await fetch("/voting");
      const nominateArray = await response.json();
      if (response.ok) {
        setNominate(nominateArray);
        console.log(nominateArray);
      }
    };
    fetchNominate();
    fetchVote();
  }, [refreshNominate]);

  function handleClick(e) {
    let selectedCandidId = e.target.id;
    let selectedCandidClass = e.target.className;

    setChoosedId(selectedCandidId);
    setChoosedClass(selectedCandidClass);
    console.log(e);
  }

  function hamdleDelete() {
    const deleteCandid = async () => {
      let rout = "/voting/admin/" + choosedID;
      const response = await fetch(rout, {
        method: "DELETE",
      });
      const json = await response.json();
      if (response.ok) {
        if (refreshNominate) {
          setRefreshNominate(false);
        } else {
          setRefreshNominate(true);
        }
        setChoosedClass("");
      } else {
        console.log(response);
      }
    };
    deleteCandid();
  }

  function hamdleRemove() {
    setChoosedClass("");
  }

  return (
    <div>
      <div>
        <div>candidate 1 votes:{candid1vote}</div>
        <div>candidate 2 votes:{candid2vote}</div>
        <div>candidate 3 votes:{candid3vote}</div>
      </div>
      <div className="nominateDisplay">
        {nominate &&
          nominate.map((candidate) => {
            return (
              <AdminNominateCart
                key={candidate._id}
                name={candidate.name}
                age={candidate.age}
                id={candidate.id}
                pic={candidate.family}
                onclick={handleClick}
                _id={candidate._id}
              />
            );
          })}
      </div>
      <div>{choosedClass}</div>
      <button onClick={hamdleDelete}>Delete</button>
      <button onClick={hamdleRemove}>Remove</button>

      <CreateElection />
    </div>
  );
}

export default Admin;
