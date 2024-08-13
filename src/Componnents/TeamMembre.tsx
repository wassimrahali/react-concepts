import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className="p-4">
        <div className="bg-gray-200 rounded-lg shadow-md p-6 flex items-center space-x-4">
          <a href="#" className="flex-shrink-0">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={this.props.info.img}
              alt={this.props.info.name}
            />
          </a>

          <div className="flex-grow">
            
              <a href="#"
              className="block mb-1 hover:underline"
            >
              <h1 className="text-xl font-semibold text-gray-800">{this.props.info.name}</h1>
            </a>
            <p className="text-gray-600">{this.props.info.position}</p>
          </div>
        </div>
      </div>
    );
  }
}