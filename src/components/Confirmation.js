import React from "react";
import Shipping from "./Shipping";

export default function Confirmation(props) {
  const chal = () => {
    // <Shipping />;
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Your Vote is Submit!</h3>
      <p style={{ textAlign: "center" }}>
        Thanks for your Vote! You will recieve a mail for total VoteCount on
        your email
      </p>
      <h2 className="summary">Vote Summary</h2>
      <div className="containerr">
        <hr />
        <h5 onClick={chal()}>
          You have voted <span className="spam">{props.data1}</span> as
          President
        </h5>
        <hr />
        <h5>
          You have voted <span className="spam">{props.data2}</span> as Prime
          Minister
        </h5>
        <hr />
        <h5>
          You have voted <span className="spam">{props.data3}</span> as
          Agriculture Minister
        </h5>
        <hr />
        <h5>
          You have voted <span className="spam">{props.data4}</span> as
          Education Minister
        </h5>
      </div>
    </div>
  );
}
