import React from "react";
import CandidatesCard from "./electionCardComponent/CandidatesCard";
import "../css/userVoteResult.css";
import Button from "@mui/material/Button";

let votedCandidateId = "";

function UserVoteResultCart({ election, vote }) {
  var winners = "";
  if (election.status === "close") {
    election.candidates.map((candid) => {
      election.result.winner.map((win) => {
        if (candid._id === win) {
          winners += candid.candidName;
        }
      });
    });
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="election-result-card">
        <div className="election-status">
          <p>Election Name: {election.electionName}</p>
          <p>Start Date: {election.startDate.slice(0, 10)}</p>
          <p>Finish Date: {election.finishDate.slice(0, 10)}</p>
          <p>
            Result:
            {election.status !== "close"
              ? "It has not been finished yet!"
              : winners}
          </p>
        </div>
        <div className="candidates-Cards">
          {election.candidates.map((candidate, key) => {
            vote.map((element) => {
              if (election._id === element.electionId) {
                votedCandidateId = element.candidateId;
              }
            });
            return (
              <div
                style={{ marginLeft: "20px" }}
                className={
                  votedCandidateId === candidate._id ? "votedCandidate" : ""
                }
              >
                <CandidatesCard key={key} candidate={candidate} />
              </div>
            );
          })}
        </div>
        <div className="select-button-holder">
          <Button className="select-button" variant="contained">
            See Result
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserVoteResultCart;
