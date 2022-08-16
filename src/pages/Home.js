import NominateCart from "../component/NominateCart";
import { useEffect, useState } from "react";
import { VotePlace } from "../component/VotePlace";

function Home() {
  const [nominate, setNominate] = useState(null);
  const [choosedID, setChoosedId] = useState("");
  useEffect(() => {
    const fetchNominate = async () => {
      const response = await fetch("/voting");
      const nominateArray = await response.json();
      if (response.ok) {
        setNominate(nominateArray);
        console.log(nominateArray);
      }
    };
    fetchNominate();
  }, []);

  function handleClick(e) {
    let selectedCandid = e.target.id;
    setChoosedId(selectedCandid);
    console.log(e);
  }

  return (
    <div>
      <div className="nominateDisplay">
        {nominate &&
          nominate.map((candidate) => {
            return (
              <NominateCart
                key={candidate._id}
                name={candidate.name}
                age={candidate.age}
                id={candidate.id}
                pic={candidate.family}
                onclick={handleClick}
              />
            );
          })}
      </div>
      <div className="voteHere">
        <VotePlace selectedId={choosedID} setChoosedId={setChoosedId} />
      </div>
    </div>
  );
}

export default Home;
