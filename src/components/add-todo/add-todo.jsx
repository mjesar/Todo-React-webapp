import React, { Component, Fragment } from "react";
import { Button, message, Input, InputNumber, Row, Col } from "antd";
import "./add-todo.css";
class AddTodo extends Component {
  render() {
    return (
      <Fragment>
        <InputNumber
          placeholder={"Task"}
          size="small"
          min={1}
          style={{ width: 400 }}
          max={100000}
          // onChange={e => {
          //   this.setState({ amount: e });
          // }}
        />
        <Button
          onClick={this.handleCash}
          style={{
            backgroundColor: "#011529",
            color: "white",
            marginTop: 8,
            width: 400
          }}
          size={"small"}
        >
          Add
        </Button>
      </Fragment>
    );
  }
}
export default AddTodo;
