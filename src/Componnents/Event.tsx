import React, { Component } from "react";

export default class Event extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => {
      return {
        number: prev.number + 1,
      };
    });
  }
  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
        
      </>
    );
  }
}
