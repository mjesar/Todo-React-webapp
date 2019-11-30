import React, { Component, Fragment } from "react";
import { Button, Input, Switch, Row, Col, Popconfirm, Table } from "antd";
import "./todo-list.css";
import { readCookie } from "../../utils/readyCookies";
import getData from "../../Networks/getData";

// import AddButton from "../add-button";
import axios from "axios";
import AddTodoPage from "../add-todo";

const data = [
  {
    id: "1",
    title: "Dinner ",
    description: "with friends",
    status: false
  },
  {
    id: "2",
    title: "Dinner ",
    description: "with friends",
    status: false
  },
  {
    id: "3",
    title: "Dinner ",
    description: "with friends",
    status: false
  },
  {
    id: "4",
    title: "Dinner ",
    description: "with friends",
    status: false
  }
];

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      title: "work",
      description: "Description",
      status: true,
      checking: true,
      todosArray: []
    };

    this.columns = [
      {
        title: "ID",
        dataIndex: "sys.id",
        key: "name"
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      { title: "Description", dataIndex: "description", key: "description" },
      {
        title: "status",
        dataIndex: "status",
        key: "status"
      },

      {
        title: "DELETE",
        key: "action",
        render: (text, record) => (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => this.handleDelete(record.id)}
          >
            <a href="javascript:;">Delete</a>
          </Popconfirm>
        )
      }
    ];
  }

  componentDidMount() {
    getData().then(res => {
      console.log(res);
      if (res.status === 200) {
        let todo = res.data.items;
        this.setState({ todosArray: todo });
      }
    });
  }
  updateStatus = checked => {
    console.log("Update Status", checked);
    return this.setState({ checking: checked });
  };
  render() {
    const { todosArray } = this.state;

    let filterdData = todosArray.filter(result => {
      return result.status
        ? (result.status = "true")
        : (result.status = "false");
    });

    return (
      <Fragment>
        <div className="todoInputs">
          <Row>
            <Col span={9}></Col>

            <Col span={2}>
              <Table
                style={{ marginTop: 40 }}
                columns={this.columns}
                rowKey="id"
                pagination={false}
                dataSource={filterdData}
              />
              <AddTodoPage />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
export default TodoList;
