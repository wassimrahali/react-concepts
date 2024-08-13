import React, { Component } from "react";

export default class Event extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
      this.setState((prev) => {
        return {
          number: prev.number + 1,
        };
      });
    };
  }
  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'> onClick={this.handleClick}>Click here </button>

      </>
    );
  }
}
