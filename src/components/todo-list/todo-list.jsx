import React, { Component, Fragment } from "react";
import { Popconfirm, Table, Checkbox, Icon } from "antd";
import "./todo-list.css";
import getData from "../../Networks/getData";
import deleteData from "../../Networks/deleteData";
import AddTodoPage from "../add-todo";
import EditTodoPage from "../edit-todo";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      title: "work",
      description: "Description",
      status: true,
      checking: true,
      flag: false,
      todosArray: [],
      id: null    };

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
        key: "status",
        render: (text,record) => (
        // <p>{record.data.status}</p>
        <div>
        {console.log(record)}
        <Checkbox checked={record.status===true? true: false} onChange={this.onChange} ></Checkbox>
        </div>
        )
      },
      {
        title: "Edit",
        dataIndex: "edit",
        key: "edit",
        render: (text,record) => (
         <div>       
          <a onClick={() => this.setState({ flag: true,id:record.sys.id})}>
            <Icon type="edit" />
          </a>
          </div>
        )
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
            <Icon type="delete" />
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
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
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
    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => {
    //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    //   },
    //   getCheckboxProps: record => {
    //     console.log(record.status)
    //     if(record.status === true){
    //       record.status = 'checked' 
    //     }
    //   }
    //    // record.status === true 
    //    // record.status = 'checked' 
    //  // return
    

    //     // disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //     // name: record.name,
      
    // };
  
    const { todosArray } = this.state;


    return (
      <Fragment>
        <div className="todoInputs">
          <Table
            style={{ marginTop: 40 }}
            columns={this.columns}
            rowKey={"ID"}
            pagination={false}
            dataSource={todosArray}
          />
          <AddTodoPage />
          <EditTodoPage flag={this.state.flag } id={this.state.id} />
        </div>
      </Fragment>
    );
  }
}
export default TodoList;
