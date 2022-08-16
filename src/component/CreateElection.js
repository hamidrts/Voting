import React from "react";
import ElectionForm from "./electionForm";
import { useState } from "react";
import CandidateForm from "./candidateForm";
import CandidateCard from "./candidateCart";

function CreateElection() {
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [term, setTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const [candidName, setCandidName] = useState("");
  const [family, setFamily] = useState("");
  const [pic, setPic] = useState("");
  const [achivement, setAchivement] = useState("");

  const [candidatesArray, setCandidatesArray] = useState([]);

  const [status, setStatus] = useState([]);

  const saveCandidate = () => {
    let candidate = {
      candidName: candidName,
      family: family,
      pic: pic,
      achivement: achivement,
    };
    setCandidatesArray((previous) => {
      return [...previous, candidate];
    });

    setCandidName("");
    setFamily("");
    setPic("");
    setAchivement("");
  };

  return (
    <div>
      <ElectionForm
        department={department}
        setDepartment={setDepartment}
        name={name}
        setName={setName}
        term={term}
        setTerm={setTerm}
        startDate={startDate}
        setStartDate={setStartDate}
        finishDate={finishDate}
        setFinishDate={setFinishDate}
        setStatus={setStatus}
        status={status}
      />
      <CandidateForm
        candidName={candidName}
        setCandidName={setCandidName}
        family={family}
        setFamily={setFamily}
        pic={pic}
        setPic={setPic}
        achivement={achivement}
        setAchivement={setAchivement}
        saveCandidate={saveCandidate}
      />
      <CandidateCard
        candidName={candidName}
        family={family}
        pic={pic}
        achivement={achivement}
      />
    </div>
  );
}

export default CreateElection;
