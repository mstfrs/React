import React, { Component } from "react";

export default class TestComponent extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { name: "Halit", color: "red", count: 0 };
    // this.handleClick = this.handleClick.bind(this);
    console.log("Hello from TestComponent constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Hello from TestComponent getDerivedStateFromProps");
    // console.log("Props: ", props);
    // console.log("State: ", state);
    return { model: "sembol" };
  }
  componentDidMount() {
    console.log("Hello from TestComponent ComponentDidMount");
    // console.log(this.state);
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 3000);
  }
  shouldComponentUpdate() {
    console.log("ShouldComponentUpdate!.........");
    return this.state.count < 3 ? true : false;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("TestComponent ComponentDidUpdate");
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    console.log("snapshot:", snapshot);
  }
  componentWillUnmount() {
    console.log("Component Güle Güle....");
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("Hello from TestComponent Render");
    return (
      <div>
        <p>This is a class Component</p>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}
