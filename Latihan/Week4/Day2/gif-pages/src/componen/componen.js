import React, { Component } from "react";

export default class componen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }
  componentDidMount() {
    let random = ["cat", "fish", "dog"];
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${random}&api_key=YYFL9nQU1Oky9xCLlZGNqsJllfGCvuPK`
    )
      .then((r) => r.json())
      .then((r) => {
        this.props.handleSubmit(r);
      });
  }

  getInput = (e) => {
    e.preventDefault();
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${this.state.input}&api_key=YYFL9nQU1Oky9xCLlZGNqsJllfGCvuPK`
    )
      .then((r) => r.json())
      .then((r) => {
        this.props.handleSubmit(r);
      });
    this.setState({
      input: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  removeGif = () => {
    this.props.remove();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getInput}>
          <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
          <button onClick={this.removeGif}>Remove GIF</button>
        </form>
      </div>
    );
  }
}
