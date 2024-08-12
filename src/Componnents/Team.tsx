import React, { Component } from "react";
import TeamMembre from "./TeamMembre";
import info from "./data"; // Adjust the path as necessary

export default class Team extends Component {
  constructor() {
    super();
    this.state = { info };
  }

  renderMembers(members) {
    return members.map((member) => (
      <TeamMembre key={member.id} info={member} />
    ));
  }

  render() {
    return <div>{this.renderMembers(this.state.info)}</div>;
  }
}
