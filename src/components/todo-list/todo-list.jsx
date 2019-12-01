import React, { Component, Fragment } from "react";
import { Row, Col, Popconfirm, Table } from "antd";
import "./todo-list.css";
import getData from "../../Networks/getData";
import deleteData from "../../Networks/deleteData";
import AddTodoPage from "../add-todo";

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
        render: (text, record, index) => (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              this.handleDelete(record.sys.id, index);
              console.log("INDEX OF ", index);
            }}
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
  handleDelete = (id, index) => {
    const { todosArray } = this.state;
    let todo = todosArray.splice(index, 1);
    console.log("index", index);
    todosArray.push(todo);
    this.setState({ todosArray: todosArray });

    deleteData(id).then(res => {
      console.log(res);

      console.log("ID", id);
    });
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
