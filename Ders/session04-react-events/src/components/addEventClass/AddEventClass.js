import React, { Component } from "react";

export default class AddEventClass extends Component {
  shoots() {
    alert("Great Shot!!!");
  }
  render() {
    return (
      <div>
        <button onClick={this.shoots}>Take the shot!</button>
      </div>
    );
  }
}
