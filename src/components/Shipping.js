import React, { useState } from "react";
import "./storeOne.css";

export default function Shipping(props) {
  const [data, setData] = useState("");
  props.getDataFromChild(data);

  return (
    <div className="containerr">
      <h2>Vote For President:</h2>

      <ul>
        <li>
          <input
            type="radio"
            id="a-option"
            name="selector"
            value="Jaydev Mathur"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="a-option" value="Jaydev Mathur">
            Jaydev Mathur
          </label>

          <div className="check"></div>
        </li>

        <li>
          <input
            type="radio"
            id="b-option"
            name="selector"
            value="Jayakan Shikre"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="b-option">Jayakan Shikre</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>

        <li>
          <input
            type="radio"
            id="c-option"
            name="selector"
            value="Bajiro Singham"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="c-option">Bajiro Singham</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
        <li>
          <input
            type="radio"
            id="d-option"
            name="selector"
            value="Mastani"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <label for="d-option">Mastani</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
