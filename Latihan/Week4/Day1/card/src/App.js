import React, { Component } from "react";
import "./App.css";
import myCard from "./component/myCard";

export default class BoxCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myname: "bambang",
    };

    setTimeout(() => {
      this.changeName();
    }, 2000);
  }
  changeName = () => {
    this.setState({
      myname: "bambang",
    });
  };

  render() {
    const instructors = this.props.intructors.map((p) => (
      <myCard key={p.id} name={p.name} type={p.type} image={p.image} />
    ));
    return (
      <div className="container">
        <h1 className="title">Mentor Glints x Binar Academy</h1>
        <div className="poke-wrapper">
          <div className="poke-container">{instructors}</div>
        </div>
        <h2>
          Our beloved mentor is <br />
          <em>{this.state.myname}</em>
        </h2>
      </div>
    );
  }
}

BoxCard.defaultProps = {
  instructors: [
    {
      id: 1,
      name: "Fikri",
      type: "Back-end",
      image: "../public/image/1.jpeg",
    },
    {
      id: 1,
      name: "Isumi Karina",
      type: "React-Native",
      image: "../public/image/2.jpg",
    },
    {
      id: 1,
      name: "Yudi",
      type: "Front-end",
      image: "../public/image/3.jpg",
    },
  ],
};
