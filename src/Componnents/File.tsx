import React, { Component } from 'react'

export default class File extends Component {
  render() {
    return (
   <div>
    <p>{this.props.name} {this.props.prenom}</p>
   </div>
    )
  }
}
