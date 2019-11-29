import React, { Component, Fragment } from "react";
import { Button, Input, Row, Col, Popconfirm, Table } from "antd";
import AddTodo from "../add-todo";
import "./todo-list.css";

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
      status: true
    };

    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "name"
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      { title: "Description", dataIndex: "description", key: "description" },
      { title: "status", dataIndex: "status", key: "status" },

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

  render() {
    let filterdData = data.filter(result => {
      return result.status
        ? (result.status = "true")
        : (result.status = "false");
    });
    const { title, description, status } = this.state;
    console.log(filterdData);

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
                pagination = {false}
                dataSource={data}
              />
              <AddTodo />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
export default TodoList;
