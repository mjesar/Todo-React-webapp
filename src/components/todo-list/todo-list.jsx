import React, { Component, Fragment } from "react";
import { Button, Input, Popconfirm,Table } from "antd";
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
  remove = () => {
    console.log("remove");
  };

  render() {
    let filterdData = data.filter(result=>{
        return  result.status ? result.status =  'true': result.status ='false'
         
      })
    const { title, description, status } = this.state;
console.log(filterdData);

    return (
      <Fragment>
        <Table
          style={{ marginTop: 40 }}
          columns={this.columns}
          rowKey="id"
            dataSource={data}
        />
        ,
      </Fragment>
    );
  }
}
export default TodoList;
