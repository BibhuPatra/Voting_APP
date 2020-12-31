import React, { useState } from "react";
import "./storeOne.css";
// import "./css/custom.css";
// import "./css/normilize.css";
// import "./css/skeleton.css";
export default () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  return (
    <div className="containerr">
      <h2>Vote For President:</h2>

      <ul>
        <li>
          <input type="radio" id="f-option" name="selector" />
          <label for="f-option">Jaydev Mathur</label>

          <div className="check"></div>
        </li>

        <li>
          <input type="radio" id="s-option" name="selector" />
          <label for="s-option">Jayakan Shikre</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>

        <li>
          <input type="radio" id="l-option" name="selector" />
          <label for="l-option">Bajiro Singham</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
        <li>
          <input type="radio" id="k-option" name="selector" />
          <label for="k-option">Mastani</label>
          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};
