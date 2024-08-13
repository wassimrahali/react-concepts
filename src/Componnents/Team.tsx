import  { Component } from "react";
import TeamMembre from "./TeamMembre";
import info from "./data"; 

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
    const { info } = this.state;

    return <div>{this.renderMembers(info)}</div>;
  }
}
