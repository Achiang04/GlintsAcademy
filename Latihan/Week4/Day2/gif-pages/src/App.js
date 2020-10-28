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
        <div className="rowgif">
          <div className="card col-md-4 p-4" key={idx}>
          <div className="barisgif">
          <iframe src={val.embed_url} />
          </div>
        </div>
        </div>
      );
    });

    return (
    <div className="row">
        <h1 className="kepala">Giphy Party</h1>
        <Componen handleSubmit={this.updateGif} remove={this.remove} />
          <div className="card col-md-4 p-4">
            <div className="barisgif">
              {gifs}
            </div>
          </div>
      </div>
    );
  }
}
