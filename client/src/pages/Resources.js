import React, { Component } from "react";
import { Collapse, Button, Modal, Input, Form } from "antd";
// import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}
const jobTrainingData = [
  {
    name: "Job Corps",
    date: "2019-03-02",
    distance: "1.2",
    description: "Technical Training Institute - we actually exist.",
    rate: "0"
  },
  {
    name: "SVCTE",
    date: "2019-03-02",
    distance: "1.4",
    description: "Carreer Technical Education",
    rate: "0"
  },
  {
    name: "Mr.Welding and Company",
    date: "2019-01-05",
    distance: "2.7",
    description: "Learn how to weld! 2 hour class.",
    rate: "0"
  },
  {
    name: "PacoBell Construction",
    date: "2019-01-02",
    distance: "0.5",
    description: "Construction Training",
    rate: "10"
  }
];

const jobOpportunityData = [
  {
    name: "Power Scrub",
    date: "2019-03-27",
    distance: "0.3",
    description: "Janitorial work",
    rate: "20"
  },
  {
    name: "Pupper Walker",
    date: "2019-01-05",
    distance: "1.1",
    description: "Walk the shelter dogs!",
    rate: "25"
  }
];

const shelterData = [
  {
    name: "Ikea",
    date: "2019-03-27",
    distance: "0.7",
    description: "Sleep somewhere, don't get caught.",
    rate: "0"
  },
  {
    name: "Care for Homeless House Place",
    date: "2019-01-05",
    distance: "1.1",
    description: "Limited beds.",
    rate: "50"
  }
];
const foodData = [
  {
    name: "The Best Soup Kitchen",
    date: "2019-03-27",
    distance: "0.3",
    description: "We have hot meals"
  },
  {
    name: "The Second Best Soup Kitchen",
    date: "2019-01-05",
    distance: "1.1",
    description: "We have meals"
  }
];
const healthData = [
  {
    name: "Free Clinics",
    date: "2019-03-27",
    distance: "0",
    description: "Go to our website!",
    link: "https://www.freeclinics.com/"
  },
  {
    name: "Dr. Dogtor",
    date: "2019-01-05",
    distance: "4",
    description: "Bark Bark Bark",
    link: "/"
  }
];

const KitchenForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Post a Kitchen"
          okText="Post"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of the kitchen!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date">
              {getFieldDecorator("date")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Distance">
              {getFieldDecorator("distance")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

const ShelterForm = Form.create({ name: "form_in_modal2" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Post a Shelter"
          okText="Post"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of the shelter!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date">
              {getFieldDecorator("date")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Distance">
              {getFieldDecorator("distance")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Rate">
              {getFieldDecorator("rate")(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

const JobOpportunityForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Post a Job Opportunity"
          okText="Post"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of the job opportunity!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date">
              {getFieldDecorator("date")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Distance">
              {getFieldDecorator("distance")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Rate">
              {getFieldDecorator("rate")(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

const JobTrainingForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Post a Job Training"
          okText="Post"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of the job training!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date">
              {getFieldDecorator("date")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Distance">
              {getFieldDecorator("distance")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Rate">
              {getFieldDecorator("rate")(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);
class Resources extends Component {
  state = {
    kitchenVisible: false,
    shelterVisible: false,
    jobOpportunityVisible: false,
    jobTrainingVisible: false,
    kitchenData: foodData,
    shelterData: shelterData,
    jobOpportunityData: jobOpportunityData,
    jobTrainingData: jobTrainingData,
    healthData: healthData
  };

  showKitchenModal = () => {
    this.setState({
      kitchenVisible: true
    });
  };

  showShelterModal = () => {
    this.setState({
      shelterVisible: true
    });
  };

  showJobOpportunityModal = () => {
    this.setState({
      jobOpportunityVisible: true
    });
  };

  showJobTrainingModal = () => {
    this.setState({
      jobTrainingVisible: true
    });
  };

  kitchenHandleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      this.setState(previousState => ({
        kitchenData: [...previousState.kitchenData, values]
      }));
      form.resetFields();
    });

    this.setState({
      kitchenVisible: false
    });
  };

  shelterHandleCreate = () => {
    const form = this.formRef2.props.form;
    console.log(form);
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      this.setState(previousState => ({
        shelterData: [...previousState.shelterData, values]
      }));
      form.resetFields();
    });

    this.setState({
      shelterVisible: false
    });
  };

  jobOpportunityHandleCreate = () => {
    const form = this.formRef3.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      this.setState(previousState => ({
        jobOpportunityData: [...previousState.jobOpportunityData, values]
      }));
      form.resetFields();
    });

    this.setState({
      jobOpportunityVisible: false
    });
  };

  jobTrainingHandleCreate = () => {
    const form = this.formRef4.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      this.setState(previousState => ({
        jobTrainingData: [...previousState.jobTrainingData, values]
      }));
      form.resetFields();
    });

    this.setState({
      jobTrainingVisible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      kitchenVisible: false,
      shelterVisible: false,
      jobOpportunityVisible: false,
      jobTrainingVisible: false
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  saveFormRef2 = formRef => {
    this.formRef2 = formRef;
  };
  saveFormRef3 = formRef => {
    this.formRef3 = formRef;
  };
  saveFormRef4 = formRef => {
    this.formRef4 = formRef;
  };

  render() {
    return (
      <div className="dashboard-content2" style={{ textAlign: "center" }}>
        <br />
        <div>
          <Button
            style={{
              borderRadius: "10px"
            }}
            size="large"
            onClick={this.showKitchenModal}
          >
            Post a Food Place
          </Button>
          <KitchenForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.kitchenVisible}
            onCancel={this.handleCancel}
            onCreate={this.kitchenHandleCreate}
          />
          <Button
            style={{
              borderRadius: "10px"
            }}
            size="large"
            onClick={this.showShelterModal}
          >
            Post a Shelter
          </Button>
          <ShelterForm
            wrappedComponentRef={this.saveFormRef2}
            visible={this.state.shelterVisible}
            onCancel={this.handleCancel}
            onCreate={this.shelterHandleCreate}
          />
          <Button
            style={{
              borderRadius: "10px"
            }}
            size="large"
            onClick={this.showJobOpportunityModal}
          >
            Post a Job Opportunity
          </Button>
          <JobOpportunityForm
            wrappedComponentRef={this.saveFormRef3}
            visible={this.state.jobOpportunityVisible}
            onCancel={this.handleCancel}
            onCreate={this.jobOpportunityHandleCreate}
          />
          <Button
            style={{
              borderRadius: "10px"
            }}
            size="large"
            onClick={this.showJobTrainingModal}
          >
            Post a Job Training
          </Button>
          <JobTrainingForm
            wrappedComponentRef={this.saveFormRef4}
            visible={this.state.jobTrainingVisible}
            onCancel={this.handleCancel}
            onCreate={this.jobTrainingHandleCreate}
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>I need help with:</div>

        <Collapse
          bordered={false}
          style={{ textAlign: "left", margin: "0 30%" }}
          onChange={callback}
        >
          <Panel header="Food" key="1">
            {Object.keys(this.state.kitchenData).map(key => (
              <div class="card">
                <div class="container">
                  <div>
                    <h5
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle"
                      }}
                    >
                      <b>{this.state.kitchenData[key]["name"]}</b>
                    </h5>
                    <small
                      class="alignright"
                      style={{
                        textAlign: "right",
                        display: "inline-block",
                        top: "50%",
                        transform: "translateY(75%)"
                      }}
                    >
                      {this.state.kitchenData[key]["date"] +
                        ": " +
                        this.state.kitchenData[key]["distance"]}
                    </small>
                  </div>
                  <hr />
                  <div>
                    <p style={{ display: "inline-block" }}>
                      {this.state.kitchenData[key]["description"]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Panel>
          <Panel header="Shelter" key="2">
            {Object.keys(this.state.shelterData).map(key => (
              <div class="card">
                <div class="container">
                  <div>
                    <h5
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle"
                      }}
                    >
                      <b>{this.state.shelterData[key]["name"]}</b>
                    </h5>
                    <small
                      class="alignright"
                      style={{
                        textAlign: "right",
                        display: "inline-block",
                        top: "50%",
                        transform: "translateY(75%)"
                      }}
                    >
                      {this.state.shelterData[key]["date"] +
                        ": " +
                        this.state.shelterData[key]["distance"]}
                    </small>
                  </div>
                  <hr />
                  <div>
                    <p style={{ display: "inline-block" }}>
                      {this.state.shelterData[key]["description"]}
                    </p>
                    <small
                      class="alignright"
                      style={{ display: "inline-block", textAlign: "right" }}
                    >
                      {"$" + this.state.shelterData[key]["rate"]}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </Panel>
          <Panel header="Work" key="3">
            <Collapse bordered={false} style={{ textAlign: "left" }}>
              <Panel header="Job Opportunities" key="4">
                {Object.keys(this.state.jobOpportunityData).map(key => (
                  <div class="card">
                    <div class="container">
                      <div>
                        <h5
                          style={{
                            display: "inline-block",
                            verticalAlign: "middle"
                          }}
                        >
                          <b>{this.state.jobOpportunityData[key]["name"]}</b>
                        </h5>
                        <small
                          class="alignright"
                          style={{
                            textAlign: "right",
                            display: "inline-block",
                            top: "50%",
                            transform: "translateY(75%)"
                          }}
                        >
                          {this.state.jobOpportunityData[key]["date"] +
                            ": " +
                            this.state.jobOpportunityData[key]["distance"]}
                        </small>
                      </div>
                      <hr />
                      <div>
                        <p style={{ display: "inline-block" }}>
                          {this.state.jobOpportunityData[key]["description"]}
                        </p>
                        <small
                          class="alignright"
                          style={{
                            display: "inline-block",
                            textAlign: "right"
                          }}
                        >
                          {"$" +
                            this.state.jobOpportunityData[key]["rate"] +
                            "/  hr"}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </Panel>
              <Panel header="Job Training" key="5">
                {Object.keys(this.state.jobTrainingData).map(key => (
                  <div class="card">
                    <div class="container">
                      <div>
                        <h5
                          style={{
                            display: "inline-block",
                            verticalAlign: "middle"
                          }}
                        >
                          <b>{this.state.jobTrainingData[key]["name"]}</b>
                        </h5>
                        <small
                          class="alignright"
                          style={{
                            textAlign: "right",
                            display: "inline-block",
                            top: "50%",
                            transform: "translateY(75%)"
                          }}
                        >
                          {this.state.jobTrainingData[key]["date"] +
                            ": " +
                            this.state.jobTrainingData[key]["distance"]}
                        </small>
                      </div>
                      <hr />
                      <div>
                        <p style={{ display: "inline-block" }}>
                          {this.state.jobTrainingData[key]["description"]}
                        </p>
                        <small
                          class="alignright"
                          style={{
                            display: "inline-block",
                            textAlign: "right"
                          }}
                        >
                          {"$" +
                            this.state.jobTrainingData[key]["rate"] +
                            "/  hr"}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="Health" key="6">
            {Object.keys(this.state.healthData).map(key => (
              <div class="card">
                <div class="container">
                  <div>
                    <h5
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle"
                      }}
                    >
                      <b>{this.state.healthData[key]["name"]}</b>
                    </h5>
                    <small
                      class="alignright"
                      style={{
                        textAlign: "right",
                        display: "inline-block",
                        top: "50%",
                        transform: "translateY(75%)"
                      }}
                    >
                      {this.state.healthData[key]["date"] +
                        ": " +
                        this.state.healthData[key]["distance"]}
                    </small>
                  </div>
                  <hr />
                  <div>
                    <p style={{ display: "inline-block" }}>
                      <a href={this.state.healthData[key]["link"]}>
                        {this.state.healthData[key]["description"]}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default Resources;
