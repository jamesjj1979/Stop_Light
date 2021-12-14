import * as React from "react";
import "./App.css";
import Circle from "../Circle";
import "./App.css";
import SidePost from "../SidePost";
import VertPost from "../VertPost";

// COLOR ARRAY FOR SETTING THE COLORS
const color = {
  red: { backgroundColor: "red" },
  yellow: { backgroundColor: "yellow" },
  green: { backgroundColor: "green" },
  grey: { backgroundColor: "gray" },
};

//MAIN APP
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      red: color.red,
      yellow: color.grey,
      green: color.grey,
      next: "green",
    };
  }

  //FUNCTION TO CHANGE THE STATE(MAKE THE COLORS APPEAR TO MOVE)
  changeLight = () => {
    if (this.state.next === "green") {
      this.setState({
        red: color.grey,
        yellow: color.grey,
        green: color.green,
        next: "yellow",
      });
      return () => {
        clearInterval(this.inter);
      };
    }
    if (this.state.next === "yellow") {
      this.setState({
        red: color.grey,
        yellow: color.yellow,
        green: color.grey,
        next: "red",
      });
      return () => {
        clearInterval(this.inter);
      };
    }
    if (this.state.next === "red") {
      this.setState({
        red: color.red,
        yellow: color.grey,
        green: color.grey,
        next: "green",
      });
      return () => {
        clearInterval(this.inter);
      };
    }

    //THIS IS A SOLUTION USING A SWITCH INSTEAD OF THE ABOVE IF STAMENT

    // switch (this.state.next) {
    //   case "red":
    //     this.setState({
    //       red: color.grey,
    //       yellow: color.grey,
    //       green: color.green,
    //       next: "green",
    //     });
    //     break;
    //   case "yellow":
    //     this.setState({
    //       red: color.grey,
    //       yellow: color.yellow,
    //       green: color.grey,
    //       next: "red",
    //     });
    //     break;
    //   case "green":
    //     this.setState({
    //       red: color.red,
    //       yellow: color.grey,
    //       green: color.grey,
    //       next: "yellow",
    //     });
    //     break;
    // }
  };

  //SETS THE INTERVAL FOR THE MOVING COLORS
  componentDidMount() {
    this.inter = setInterval(this.changeLight, 3000);
  }

  render() {
    return (
      <div>
        <div className="stoplight">
          <Circle color={this.state.green} />
          <Circle color={this.state.yellow} />
          <Circle color={this.state.red} />
        </div>
        <div className="sidepost">
          <SidePost />
        </div>
        <VertPost />
      </div>
    );
  }
}

export default App;
