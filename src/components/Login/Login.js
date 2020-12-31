import React from "react";
import "./Login.css";
import LogoImg from "../assets/Register.svg";
import axios from "axios";
import Btn from "../NewOauth";
import { Button } from "../Button";
import { connect } from "react-redux";
import { password, userLogin, userName } from "../../Actions/actions";

function Login(props) {
  const handelChangeUserName = (text) => {
    props.userName(text.target.value);
  };
  const handelChangeUserPassword = (text) => {
    props.password(text.target.value);
  };
  const LoginOnclick = () => {
    // e.preventDefault();
    // const setuserName = props.redu.userName;
    let obj = {
      Email: props.redu.userName,
      Password: props.redu.password,
    };
    const URL = "http://localhost:7153/api/Login/UserLogin";
    axios
      .post(URL, obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.usertype);
        localStorage.setItem("usertype", response.data.usertype);
        localStorage.setItem("isAuthenticated", true);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  return (
    <>
      <div className="BaseContainer" ref={props.containerRef}>
        <div className="CostumHeader"> Login </div>
        <div className="Content">
          <div className="Image">
            <img src={LogoImg} alt="#" />
          </div>
          <label> Username &nbsp;: </label>
          <input
            type="text"
            placeholder="Jhon$123"
            value={props.redu.userName}
            onChange={(text) => {
              handelChangeUserName(text);
            }}
            required
          ></input>
          <br />
          <label> Password &nbsp;: </label>
          <input
            type="password"
            placeholder="Password"
            value={props.redu.password}
            onChange={(text) => {
              handelChangeUserPassword(text);
            }}
            required
          ></input>
        </div>
        <div className="Footer">
          <Button className="butn" type="Button" onClick={LoginOnclick}>
            Login
          </Button>
        </div>
        <footer>
          <Btn className="fa fa-google" />
        </footer>
      </div>
    </>
  );
}
class LoginCont extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    redu: store.redu,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: () => {
      dispatch(userLogin());
    },
    userName: (Name) => {
      dispatch(userName(Name));
    },
    password: (Password) => {
      dispatch(password(Password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginCont);
