import React, { Component, Fragment } from "react";
import "./App.css";
import TodoList from "./components/todo-list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <TodoList />
      </Fragment>
    );
  }
}

export default App;
