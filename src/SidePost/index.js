import * as React from "react";
import "./main.css";

//GIVES THE HORAZONTAL BAR AND THE UPTRUST LOGO
class sidepost extends React.Component {
  render() {
    return (
      <div className="side">
        <span className="up">Up</span>
        <span className="trust">trust</span>
      </div>
    );
  }
}

export default sidepost;
