import React, { Component } from "react";

export default class MyCard extends Component {
  render() {
    // string templates, ES2015 feature
    const altText = `${this.props.name}, type: ${this.props.type}`;

    // const and object destructuring, ES2015
    const { name, image, type } = this.props;
    return (
      <div className="card">
        <h2 className="card-name">{name}</h2>
        <img src={image} alt={altText} />
        <h4 className="type">
          <strong>class:</strong>
          {type}
        </h4>
      </div>
    );
  }
}
