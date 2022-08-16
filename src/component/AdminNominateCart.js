import React from "react";

function AdminNominateCart({ name, age, id, pic, onclick, _id }) {
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
          <button id={_id} className={id} onClick={onclick}>
            Choose
          </button>
        </p>
      </div>
    </div>
  );
}

export default AdminNominateCart;
