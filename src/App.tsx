import { Component } from "react";
export default class App extends Component {
  myMethod(prenom){
    return <span>{prenom}</span>
  }
  render() {
 
    const name = "Wassim"
    const prenom = this.myMethod("Mohamed")
    return (
      <div>
        <p>{name} {prenom}</p>
      </div>
    );
  }
}
