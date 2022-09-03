import React from "react";
import "../css/myAccount.css";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import UserVoteResultCart from "../component/UserVoteResultCart";

function MyAccount() {
  const { user } = useAuthContext();
  const [error, setError] = useState("");
  const [vote, setVote] = useState("");

  useEffect(() => {
    const fetchUserVote = async () => {
      const response = await fetch(`/voting/app/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const json = await response.json();
      console.log(json);
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setVote(json);
      }
    };
    fetchUserVote();
  }, []);
  return (
    <div>
      <div className="title-holder">
        <h2>Your previous votes</h2>
      </div>
      {!vote.votes && (
        <div>
          <p>{vote}</p>
        </div>
      )}
      {vote.votes &&
        vote.election.map((election, key) => {
          return (
            <div>
              <UserVoteResultCart
                key={key}
                election={election}
                vote={vote.votes}
              />
            </div>
          );
        })}
    </div>
  );
}

export default MyAccount;
