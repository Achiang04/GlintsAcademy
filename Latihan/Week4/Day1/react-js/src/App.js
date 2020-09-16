import React, { Component } from "react";
import "./App.css";
// import { Card, CardTitle, CardText, CardImg } from "reactstrap";
import { Card } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="title">
          <h1>React Native Students Batch#7</h1>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./gambar/1.jpeg" />
            <Card.Body>
              <Card.Title>Asep</Card.Title>
              <Card.Text>Asep si anak haram</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}