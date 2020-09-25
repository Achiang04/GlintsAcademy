import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }
  async getUsersData() {
    const res = await axios.get("https://btm-rn.herokuapp.com/api/v1/users");
    console.log(res.data.results);
    this.setState({ loading: false, users: res.data.results });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    const columns = [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Name",
        accessor: "name",
      },

      {
        Header: "Age",
        accessor: "age",
      },
    ];
    return <ReactTable data={this.state.users} columns={columns} />;
  }
}
