import { useEffect, useState } from "react";
import CandidatesVoting from "../component/CandidatesVoting";
import ElectionCard from "../component/ElectionCard";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from "@mui/material/Button";

function Home() {
  const [election, setElection] = useState("");
  const { user } = useAuthContext();
  const [selectedElection, setSelectedElection] = useState([]);
  const [ifElectionSelect, setIfElectionSelect] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [error, setError] = useState(null);

  const handleSelectElection = (event) => {
    const [choosedElection] = election.filter((item) => {
      if (event.target.id === item._id) {
        return item;
      }
    });
    console.log("hey", choosedElection);
    setSelectedElection(choosedElection);
    setIfElectionSelect(true);
  };

  const handleCancel = () => {
    setSelectedElection([]);
    setIfElectionSelect(false);
    setSelectedCandidate(null);
  };

  const handleSelectCandidate = (e) => {
    setSelectedCandidate(e.target.id);
    console.log(selectedCandidate);
  };

  const handleSubmit = async () => {
    const vote = {};
    vote.userId = user.id;
    vote.electionId = selectedElection._id;
    vote.candidateId = selectedCandidate;
    const response = await fetch("/voting/app/submitvote", {
      method: "POST",
      body: JSON.stringify(vote),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setSelectedElection([]);
      setIfElectionSelect(false);
      setSelectedCandidate(null);
    }
  };

  useEffect(() => {
    let route = "";

    if (!user) {
      route = "/voting/app?status=open";
    } else {
      route = "/voting/app?department=" + user.department + "&status=open";
    }
    const fetchElection = async (a) => {
      const response = await fetch(a);
      const json = await response.json();
      if (!response.ok) {
        console.log(response);
      } else {
        setElection(json);
        console.log("fetchedElection:", json);
      }
    };
    fetchElection(route);
  }, [user]);

  return (
    <div>
      {election &&
        election.map((item) => {
          return (
            <div>
              <ElectionCard
                ifElectionSelect={ifElectionSelect}
                handleSelectElection={handleSelectElection}
                election={item}
                key={item._id}
              />
            </div>
          );
        })}
      <div className="vote-bord">
        <div className="candidate-place">
          {ifElectionSelect &&
            selectedElection.candidates.map((candid) => {
              return (
                <div>
                  <CandidatesVoting
                    candidate={candid}
                    selectedCandidate={selectedCandidate}
                    handleSelectCandidate={handleSelectCandidate}
                    key={candid.id + 9}
                  />
                </div>
              );
            })}
        </div>
        {ifElectionSelect && (
          <div className="button-holder">
            <div className="submit-button">
              <Button
                onClick={handleCancel}
                className="select-button"
                variant="contained"
              >
                Cancel
              </Button>
            </div>

            <div className="submit-button">
              <Button
                onClick={handleSubmit}
                className="select-button"
                variant="contained"
              >
                Submit vote
              </Button>
            </div>
            <div>{error}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
