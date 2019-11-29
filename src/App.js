import React, { Component, Fragment } from "react";
import { Button, Input } from "antd";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "work",
      description: "Description",
      status: true
    };
  }

  render() {
    const { title, description, status } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <h1>{status? 'done':"uncomplete"}</h1>

        <Button type="primary" icon="poweroff">
          Click me!
        </Button>
      </div>
    );
  }
}

export default App;
