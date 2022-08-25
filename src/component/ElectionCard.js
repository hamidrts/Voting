import React from "react";
import CandidatesCard from "./electionCardComponent/CandidatesCard";
import Button from "@mui/material/Button";
import { useAuthContext } from "../hooks/useAuthContext";

function ElectionCard({ election, handleSelectElection, ifElectionSelect }) {
  const { user } = useAuthContext();

  return (
    <div className={ifElectionSelect ? "inactive" : "election"}>
      <div className="election-card">
        <div className="election-specification">
          <div>
            <h4 className="inline-block">Department:</h4>
            {election.department}
          </div>
          <div>
            <h4 className="inline-block">Election Name:</h4>
            {election.electionName}
          </div>
          <div>
            <h4 className="inline-block">Term:</h4>
            {election.term}
          </div>
          <div>
            <h4 className="inline-block">Startdate:</h4>
            {election.startDate.slice(0, 10)}
          </div>
          <div>
            <h4 className="inline-block">Finishdate:</h4>
            {election.finishDate.slice(0, 10)}
          </div>
        </div>
        <div className="candidate-previwe">
          {election.candidates.map((item) => {
            return (
              <div style={{ marginLeft: "25px" }} key={item._id}>
                <CandidatesCard candidate={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="select-button">
        <Button
          id={election._id}
          onClick={handleSelectElection}
          disabled={!user || ifElectionSelect}
          className="select-button"
          variant="contained"
        >
          Select Election
        </Button>
      </div>
    </div>
  );
}

export default ElectionCard;
