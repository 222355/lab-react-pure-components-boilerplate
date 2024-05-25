import React, { PureComponent } from "react";
import "./component.css";

export default class PureCounterComponent extends PureComponent {
  constructor() {
    super();
    this.state = { count: 0, isToggle: true };
  }
  handleCount = () => {
    if (this.state.isToggle) {
      this.setState((prevstate) => ({ count: prevstate.count + 1 }));
    }
  };
  handleToggle = () => {
    this.setState((prev) => ({ isToggle: !prev.isToggle }));
  };
  render() {
    console.log("This is Pure Component");
    return (
      <div>
        <h1>Pure Component</h1>
        <h5>{this.state.count}</h5>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleCount}>Counter</button>
      </div>
    );
  }
}
