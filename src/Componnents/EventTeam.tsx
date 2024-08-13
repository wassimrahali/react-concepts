import React, { Component } from "react";
import TeamMembre from "./TeamMembre";
import info from "./data";
export default class EventTeam extends Component {
  constructor() {
    super();
    this.state = {
      info,
      membres: [],
      counter: 0,
    };

    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    this.state.membres.push(this.state.info[this.state.counter]);
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });

    this.newMembres = this.state.membres.map((member) => (
      <TeamMembre key={member.id} info={member} />
    ));
  }

  render() {
    return (
<div className="container mx-auto pt-10">
<div className="p-4">
        <div className="bg-gray-200 rounded-lg shadow-md p-6 flex items-center space-x-4">
          {this.newMembres}
        </div>
        <button
          onClick={this.clickEvent}
          className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Team
        </button>
      </div>
</div>
    );
  }
}
