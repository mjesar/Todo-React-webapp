import React from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
import "./add-todo.css";
import addData from "../../Networks/addData";

const AddTodoForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Add new Task"
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
              {getFieldDecorator("status")(
                <Radio.Group>
                  <Radio value={true}>Complete</Radio>
                  <Radio value={false}>Uncomplete</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class AddTodoPage extends React.Component {
  state = {
    visible: false,
    size: "large"
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
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

      addData(data).then(res => {
        console.log("res", res);
      });

      form.resetFields();
      this.setState({ visible: false });
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
        <AddTodoForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate.bind(this)}
        />
      </div>
    );
  }
}

export default AddTodoPage;
