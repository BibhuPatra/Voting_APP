import React, { useState } from "react";
import LogoImg from "../assets/Login.svg";
import "./Register.css";
import axios from "axios";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { Button } from "../Button";

export default function Register(props) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Prefix, setPrefix] = useState("");
  const [UserId, setUserId] = useState("");
  // const [button, setButton] = useState(true);

  //   const [UserId, setUserId] = useState("");

  const handelChangeUserName = (text) => {
    setName(text.target.value);
  };
  const handelChangeUserEmail = (text) => {
    setEmail(text.target.value);
  };
  const handelChangeUserPassword = (text) => {
    setPassword(text.target.value);
  };
  const handelChangeUserPrefix = (value) => {
    setPrefix(value);
  };

  const RegisterOnclick = () => {
    let obj = {
      Prefix: Prefix,
      Name: Name,
      Email: Email,
      Password: Password,
      Address: Address,
      UserId: UserId,
    };
    handelChangeUserPrefix(Prefix);
    axios
      .post("http://localhost:7153/api/Registration", obj, {
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
    <form>
      <div className="BaseContainerr" ref={props.containerRef}>
        <div className="CostumHeader">Registration</div>
        <div className="Content">
          <div className="Image">
            <img src={LogoImg} alt="#" />
          </div>
          <br />
          <label>Select Type</label>
          <Select
            className="select"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={Prefix}
            onChange={(e) => setPrefix(e.target.value)}
            label="type"
          >
            <MenuItem value="">
              <em>Choose type</em>
            </MenuItem>
            <MenuItem value="AD">AD</MenuItem>
            <MenuItem value="UR">UR</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          <label>Name :</label>
          <input
            type="text"
            placeholder="Jhon$123"
            value={props.regName}
            onChange={(text) => {
              handelChangeUserName(text);
            }}
          ></input>
          <div id="NameError"></div>
          <label>Email :</label>
          <input
            type="email"
            placeholder="exapmle@gmail.com"
            value={props.regEmail}
            onChange={(text) => {
              handelChangeUserEmail(text);
            }}
            required
          ></input>
          <div id="EmailError"></div>
          <label>Password &nbsp;:</label>
          <input
            type="password"
            placeholder="Password"
            value={props.regPassword}
            onChange={(text) => {
              handelChangeUserPassword(text);
            }}
            required
          ></input>
          <label>Select Type</label>
          <Select
            className="select"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={UserId}
            onChange={(e) => setUserId(e.target.value)}
            label="type"
          >
            <MenuItem value="">
              <em>User Type</em>
            </MenuItem>
            <MenuItem value={1}>Admin</MenuItem>
            <MenuItem value={2}>User</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          <div id="PasswordError"></div>
          <label>Address &nbsp;:</label>
          <input
            type="text"
            name="Address"
            placeholder="Lane no. Landmark , Appartment Name."
            required
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
          ></input>
        </div>
        <div className="Footer">
          {Button && (
            <Button pathx="/vote" onClick={RegisterOnclick}>
              SIGN UP
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
