import { Component } from "react";
import File from "./Componnents/File";
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  // myMethod(prenom){
  //   return <span>{prenom}</span>
  // }
  render() {
 
    // const name = "Wassim"
    // const prenom = this.myMethod("Mohamed")
    return (
      <div>
        {/* <p>{name} {prenom}</p> */}
        <File name="Wassim"  prenom="Rahali"/>
        <File name="Nour" />
        <File name="Saief" />

      </div>
    );
  }
}
