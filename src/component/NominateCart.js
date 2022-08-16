import React from "react";

function NominateCart({ name, age, id, pic, onclick }) {
  return (
    <div className="nominatecart">
      <div>
        <img src={pic} />
      </div>
      <div>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <p>
          id:{id}{" "}
          <button id={id} onClick={onclick}>
            Choose
          </button>
        </p>
      </div>
    </div>
  );
}

export default NominateCart;
