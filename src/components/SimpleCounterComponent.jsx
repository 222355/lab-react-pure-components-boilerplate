import React, { Component } from "react";

export default class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0, isToggle: true };
  }
  handleCount = () => {
    if (this.state.isToggle) {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }
  };
  handleToggle = () => {
    this.setState((prev) => ({ isToggle: !prev.isToggle }));
  };
  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <h1>Simple Component</h1>
        <h5>{this.state.count}</h5>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleCount}>Counter</button>
      </div>
    );
  }
}
