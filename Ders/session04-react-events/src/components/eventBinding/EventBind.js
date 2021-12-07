import { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Helloooo" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(name) {
    this.setState({ message: `Goodbye` });
    // alert("HEllo");
    console.log(this);
  }
  render() {
    return (
      <div>
        {/**
         * 1. Binding in render method
         * 2. Binding in render method using arrow function
         * 3. Binding in the constructor
         * 4. Class property as an arrow function
         */}
        <p>{this.state.message}</p>
        <h2>EventBinding</h2>
        {/* <button onClick={this.handleClick.bind(this)}>Binding in Render</button>
        <br />
        <button onClick={() => this.handleClick()}>Binding Arrow Func</button>
        <br /> */}
        {/* <button onClick={() => this.handleClick("Jane")}>
          Binding in Constructor
        </button> */}
        <button onClick={this.handleClick}>Binding with Arrow Func</button>
      </div>
    );
  }
}
