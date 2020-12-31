import Login from "../Login/Login";
import Register from "../Register/Register";
import React from "react";
import "./Major.css";
import Footer from "../Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? (
      <i
        class="fa fa-user-plus"
        aria-hidden="true"
        style={{ fontSize: "25px", marginRight: "65px" }}
      >
        Register
      </i>
    ) : (
      <i
        className="fa fa-user-circle"
        aria-hidden="true"
        style={{ fontSize: "25px", marginRight: "12rem" }}
      >
        Login
      </i>
    );
    const currentActive = isLogginActive ? (
      <i
        className="fa fa-user-circle"
        aria-hidden="true"
        style={{ fontSize: "25px" }}
      >
        Login
      </i>
    ) : (
      <i
        class="fa fa-user-plus"
        aria-hidden="true"
        style={{ fontSize: "25px" }}
      >
        Register
      </i>
    );
    return (
      <div className="miles">
        <div className="App">
          <div className="login">
            <div className="container" ref={(ref) => (this.container = ref)}>
              {isLogginActive && (
                <Login containerRef={(ref) => (this.current = ref)} />
              )}
              {!isLogginActive && (
                <Register containerRef={(ref) => (this.current = ref)} />
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={(ref) => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
