import React, { useState } from "react";

export default function Payment(props) {
  const [data, setData] = useState("");
  props.getDataFromChild2(data);

  return (
    <div className="containerr">
      <h2>Vote For Vice President:</h2>

      <ul>
        <li>
          <input
            type="radio"
            id="e-option"
            name="selector"
            value="MurliDharan"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="e-option">MurliDharan</label>

          <div className="check"></div>
        </li>

        <li>
          <input
            type="radio"
            id="f-option"
            name="selector"
            value="Sangam Diwedi"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="f-option">Sangam Diwedi</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>

        <li>
          <input
            type="radio"
            id="g-option"
            name="selector"
            value="Dharmyug Patel"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="g-option">Dharmyug Patel</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
        <li>
          <input
            type="radio"
            id="h-option"
            name="selector"
            value="Chypher Chistopher"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="h-option">Chypher Chistopher</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
