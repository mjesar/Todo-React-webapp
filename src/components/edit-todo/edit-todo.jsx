import React from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
import "./edit-todo.css";
// import editData from "../../Networks/editData";

const EditTodoForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Task"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator("status", {
                initialValue: "public"
              })(
                <Radio.Group>
                  <Radio value="true">Complete</Radio>
                  <Radio value="false">Uncomplete</Radio>
                </Radio.Group>
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
      flag: this.props.flag
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if(this.props!=nextProps){
      console.log('nextProps',nextProps);
      this.setState({flag:nextProps.flag})
    }
    
  }

  showModal = () => {
    this.setState({ visible: true });
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

    //   addData(data).then(res => {
    //     console.log("res", res);
    //   });

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
        <Button
          onClick={this.showModal}
          style={{ color: "343a40", color: "white" }}
          shape="circle"
          icon="plus"
          size={size}
          id="back-to-top"
        ></Button>

        <EditTodoForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.flag}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate.bind(this)}
        />
      </div>
    );
  }
}

export default EditTodoPage;
