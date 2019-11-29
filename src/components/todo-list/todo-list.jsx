import React, { Component, Fragment } from "react";
import { Button, Input, Switch, Row, Col, Popconfirm, Table } from "antd";
import "./todo-list.css";
// import AddButton from "../add-button";
import axios from 'axios'
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
      checking:true
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
      {
        title: "status",
        dataIndex: "status",
        key: "status",
        render: (text, record) => {
          console.log('this', record)
          return (
            <Switch
           // checked= {"status"}
            //   style={{ backgroundColor: "#011529" ,color: "white" }}
           id={record.status?"a":"b"}
         //   checked={true ? "a" :'b'}
            //  defaultChecked
              onChange={this.updateStatus}
            />
          );
        }
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
  componentDidMount(){
     axios({
    method: 'get',
    url: '',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-User-Email': readCookie('userEmail'),
      'X-User-Token': readCookie('userToken'),
    },
  })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
     console.log(error);
     
    });

  }
  updateStatus = (checked )=> {
    console.log("Update Status",checked);
  return this.setState({checking:checked})
  };
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
                pagination={false}
                dataSource={data}
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
