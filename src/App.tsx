import { Component } from "react";
// import File from "./Componnents/File";
import Team from "./Componnents/Team";
import Event from "./Componnents/Event";
import EventTeam from "./Componnents/EventTeam";
export default class App extends Component {
  // myMethod(prenom){
  //   return <span>{prenom}</span>
  // }
  constructor() {
    super();
    this.state = {
      answer: "Yes",
    };
  }
  render() {
    // const name = "Wassim"
    // const prenom = this.myMethod("Mohamed")
    return (
      <div>
        {/* <p>{name} {prenom}</p>

        <File name="Wassim"  prenom="Rahali"/>
        <File name="Nour" />
        <File name="Saief" />
        <p>Do you love me : </p>
        <p>{this.state.answer}</p>
        <Team /> */}




{/* <Team /> */}
{/* <Event /> */}

<EventTeam />
      </div>
    );
  }
}
