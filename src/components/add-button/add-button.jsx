import React, { Component, Fragment } from "react";
import { Button } from "antd";
import "./add-button.css";
class AddButton extends Component {
  state = {
    size: "large"
  };

  handlePopup = () => {
    console.log("POPUP");
    
  }
  render() {
    const { size } = this.state;

    return (
      <Fragment>
        
        <Button
          style={{ backgroundColor: "#011529", color: "white" }}
          shape="circle"
          icon="plus"
          size={size}
          onClick={this.handlePopup}

        />
      </Fragment>
    );
  }
}
export default AddButton;
