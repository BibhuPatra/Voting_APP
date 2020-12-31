import React from "react";
import axios from "axios";
import styled from "styled-components";
import { MultiStepForm, Step } from "react-multi-form";
import Shipping from "./components/Shipping";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";
import { Button } from "./components/Button";

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  @media (max-width: 590px) {
    width: 300px;
  }
`;

const Ap = () => {
  const [active, setActive] = React.useState(1);
  const [data1, setdata1] = React.useState("");
  const [data2, setdata2] = React.useState("");
  const [data3, setdata3] = React.useState("");
  const [data4, setdata4] = React.useState("");
  const [value, setValue] = React.useState("");
  const getData = (dataFromChild) => {
    setdata1(dataFromChild);
  };
  const getData2 = (dataFromChild2) => {
    setdata2(dataFromChild2);
  };
  const getData3 = (dataFromChild3) => {
    setdata3(dataFromChild3);
  };
  const getData4 = (dataFromChild4) => {
    setdata4(dataFromChild4);
  };
  const c = () => {
    let obj = {
      value: value,
    };
    axios
      .post("http://localhost:7153/api/Vote", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Registration Done!");
      })
      .catch((response) => {});
  };
  return (
    <div>
      <Container onClick={c()}>
        <MultiStepForm activeStep={active}>
          <Step label="President">
            <Shipping
              getDataFromChild={getData}
              onChange={(e) => setValue(e.target.value)}
            />
          </Step>
          <Step label="Vice President">
            <Payment
              getDataFromChild2={getData2}
              onChange={(e) => setValue(e.target.value)}
            />
          </Step>
          <Step label="Chairman">
            <Third
              getDataFromChild3={getData3}
              onChange={(e) => setValue(e.target.value)}
            />
          </Step>
          <Step label="Secretary">
            <Fourth
              getDataFromChild4={getData4}
              onChange={(e) => setValue(e.target.value)}
            />
          </Step>
          <Step label="Review">
            <Confirmation
              data1={data1}
              data2={data2}
              data3={data3}
              data4={data4}
            />
          </Step>
        </MultiStepForm>
        {active !== 1 && (
          <Button onClick={() => setActive(active - 1)}>Previous</Button>
        )}
        &nbsp; &nbsp;
        {active !== 5 && (
          <Button onClick={() => setActive(active + 1)}>Next</Button>
        )}
      </Container>
      {active === 5 && <Button onClick={c()}>Submit Vote</Button>}{" "}
    </div>
  );
};

export default Ap;
