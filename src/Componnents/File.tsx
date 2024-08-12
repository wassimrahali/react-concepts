import React, { Component } from 'react';

// Define the interface for the props
interface FileProps {
  name: string;
  prenom: string;
}

export default class File extends Component<FileProps> {
  render() {
    const { name, prenom } = this.props;
    return (
      <div>
        <p>{name} {prenom}</p>
      </div>
    );
  }
}
