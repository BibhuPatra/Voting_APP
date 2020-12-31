import React, { useState } from "react";

export default function Fourth(props) {
  const [data, setData] = useState("");
  props.getDataFromChild4(data);

  return (
    <div className="containerr">
      <h2>Vote For Secretary:</h2>
      <ul>
        <li>
          <input
            type="radio"
            id="z-option"
            name="selector"
            value="Sujasree Di"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="z-option">Sujasree Di</label>
          <div className="check"></div>
        </li>
        <li>
          <input
            type="radio"
            id="y-option"
            name="selector"
            value="Jajati Badu"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="y-option">Jajati Badu</label>
          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
        <li>
          <input
            type="radio"
            id="n-option"
            name="selector"
            value="Manas Ranjan"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="n-option">Manas Ranjan</label>
          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
        <li>
          <input
            type="radio"
            id="o-option"
            name="selector"
            value="Stuart Little"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="o-option">Stuart Little</label>
          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
