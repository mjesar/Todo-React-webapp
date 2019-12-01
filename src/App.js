import React, { Component, Fragment } from "react";
import "./App.css";
import TodoList from "./components/todo-list";
import MainHeader from "./components/header";
import { readCookie } from "../src/utils/readyCookies";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (readCookie("userToken") === null || readCookie("userEmail") === null) {
      return (window.location = "http://localhost:3000/users/sign_in");
    } else {
      return (
        <Fragment>
          <MainHeader />
          <TodoList />
        </Fragment>
      );
    }
  }
}

export default App;
