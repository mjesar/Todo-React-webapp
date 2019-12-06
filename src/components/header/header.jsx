import React, { Component, Fragment } from "react";
import { Layout, Row, Col, Menu, Dropdown, Icon } from "antd";
import "./header.css";
const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="http://localhost:3000/signout">
        <Icon type="logout" theme="outlined" className="dropdown-icon" /> Logout
      </a>
    </Menu.Item>
  </Menu>
);
class MainHeader extends Component {
  render() {
    return (
      <Fragment>
        <Header style={{ color: "343a40", width: "100%" }}>
          <div className={"userInfo"}>
            <Row>
              <div className="spanInfo">
                <Col span={16}>
                  <span className="spanClass">Todo App</span>
                  <span className="spanClass" style={{ marginLeft: 10 }}></span>
                </Col>
                <Col span={8}>
                  <Dropdown overlay={menu} placement="bottomCenter">
                    <img
                      style={{ float: "right", marginTop: 10 }}
                      src="https://res.cloudinary.com/asadaziz/image/upload/v1561444483/dummyavatar_kb3aub.png"
                      alt=""
                      className="avatarImg"
                    />
                  </Dropdown>
                </Col>
              </div>
            </Row>
          </div>
        </Header>
      </Fragment>
    );
  }
}
export default MainHeader;
