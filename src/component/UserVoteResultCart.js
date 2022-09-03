import React from "react";
import CandidatesCard from "./electionCardComponent/CandidatesCard";
import "../css/userVoteResult.css";
let votedCandidateId = "";

function UserVoteResultCart({ election, winner, vote }) {
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
              : winner}
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
                className={
                  votedCandidateId === candidate._id ? "votedCandidate" : ""
                }
              >
                <CandidatesCard key={key} candidate={candidate} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserVoteResultCart;
