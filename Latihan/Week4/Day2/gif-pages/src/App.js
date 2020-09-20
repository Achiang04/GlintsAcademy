import React, { Component } from "react";
import Componen from "./componen/componen";
import "./App.css";
export default class Gifparty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      param: [],
    };
  }

  remove = () => {
    this.setState({
      param: [],
    });
  };

  updateGif = (response) => {
    this.setState({
      param: this.state.param.concat(
        response.data[Math.floor(Math.random() * response.data.length)]
      ),
    });
  };

  render() {
    let gifs = this.state.param.map((val, idx) => {
      return (
        <div className="col-sm-3" key={idx}>
          <iframe src={val.embed_url} />
        </div>
      );
    });

    return (
      <div>
        <h1 className="kepala">Giphy Party</h1>
        <Componen handleSubmit={this.updateGif} remove={this.remove} />
        {gifs}
      </div>
    );
  }
}
