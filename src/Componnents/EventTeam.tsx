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
    this.state.membres.push(this.state.info[this.state.counter])
    this.setState((prev)=>{
      return {counter : prev.counter +1}
    });

    this.newMembres = this.state.membres.map((member) => (
      <TeamMembre key={member.id} info={member} />
    ));
  }

  
  render() {
    return (
      <div>
        {this.newMembres}
        <button onClick={this.clickEvent}>Add Team </button>
      </div>
    );
  }
}