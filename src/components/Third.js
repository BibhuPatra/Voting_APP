import React, { useState } from "react";

export default function Third(props) {
  const [data, setData] = useState("");
  props.getDataFromChild3(data);
  return (
    <div className="containerr">
      <h2>Vote For Chairman :</h2>

      <ul>
        <li>
          <input
            type="radio"
            id="p-option"
            name="selector"
            value="Dikshi Ram"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="p-option">Dikshi Ram</label>

          <div className="check"></div>
        </li>

        <li>
          <input
            type="radio"
            id="q-option"
            name="selector"
            value="Manpreet Kaur"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="q-option">Manpreet Kaur</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>

        <li>
          <input
            type="radio"
            id="r-option"
            name="selector"
            value="Clincton Rahul"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="r-option">Clincton Rahul</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
        <li>
          <input
            type="radio"
            id="s-option"
            name="selector"
            value="Stinder Mitwa"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="s-option">Stinder Mitwa</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
