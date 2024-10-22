import React from "react";
import { Button, Modal, Form, Input, Radio,Checkbox } from "antd";
import "./edit-todo.css";
import editData from "../../Networks/editData";
import showData from "../../Networks/showData";

const EditTodoForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    constructor(props){
      super(props)
      this.state={
        data:"",
        checked:false
      }
    }
    onChange = e => {
      console.log('checked = ', e.target.checked);
      this.setState({
        checked: e.target.checked,
      });
    };
    UNSAFE_componentWillReceiveProps(nextProps){
        if(this.props!==nextProps){
          this.setState({
            data:nextProps.data,
            status:nextProps.data.status
          })
        }

    }

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      console.log(this.state);
      return (
        <Modal
          visible={visible}
          title="Edit Task"
          okText="Update"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                   initialValue: this.state.data.title,
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description",{
                initialValue:this.state.data.description
              })(<Input type="textarea"/>)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator("status")(
                // <Radio.Group>
                //   <Radio value="true">Complete</Radio>
                //   <Radio value="false">Uncomplete</Radio>
                // // </Radio.Group>
                // <Radio value={this.state.data.status===true?true:false}>Complete</Radio>
                //   <Radio value={this.state.data.status===false?false:true}>Uncomplete</Radio>
                <Checkbox  checked={this.state.checked}
               
                onChange={this.onChange} >Status</Checkbox>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class EditTodoPage extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
    this.state = {
      visible: false,
      size: "large",
      flag: this.props.flag,
      id: this.props.id,
      todosArray: ""

    };
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if(this.props!=nextProps){
      console.log('nextProps',nextProps);
      this.setState({flag:nextProps.flag})
      let id = nextProps.id
      console.log("nextProp", id);
      this.setState({id: id})
      
      // let id =this.setState({id:nextProps.id})
      //   console.log("PZRPS ID",id);
      if(id!==null){
        showData(id).then(res => {
          console.log(res);
        //   if (res.status === 200) {
            let todo = 
            {
              id:res.data.sys.id,
              title:res.data.title,
              description:res.data.description,
              status:res.data.status
            }
            ;
            this.setState({ todosArray: todo });
            console.log("SHow data ", todo);
            
      
        //   }
        });
      }
      
        
    }
  }
  
  showModal = () => {
    this.setState({ visible: true });
    let id = this.state.id
    console.log("ID", id);

  //   showData(id).then(res => {
  //   console.log(res);
  // //   if (res.status === 200) {
  //     let todo = res;
  //     this.setState({ todosArray: todo });
  //     console.log("SHow data ", res);
      

  // //   }
  // });
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.setState({ flag:false });
    console.log("handleCancel", this.state.flag);
    

  };

  handleCreate = () => {
    const { form } = this.formRef.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log("Received values of form: ", values);

      let data = {
        title: values.title,
        description: values.description,
        status: values.status
      };
      console.log("State Data", data);
      console.log("Edit ID",this.state.id);
      let id = this.state.id
      editData(data,id).then(res => {
        console.log("res", res);
      });

      form.resetFields();
      this.setState({ flag: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const { size } = this.state;

    return (
      <div>
      
        <EditTodoForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.flag}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate.bind(this)}
          data={this.state.todosArray}
        />
      </div>
    );
  }
}

export default EditTodoPage;
