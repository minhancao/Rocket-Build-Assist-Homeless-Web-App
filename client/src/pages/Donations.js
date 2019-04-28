import React, { Component } from "react";
import { Icon, Layout, Input, Row, Col, Button, Modal, Radio } from "antd";
import Cards from "react-credit-cards";
import ReactCreditCards from "./ReactCreditCards";
import "react-credit-cards/es/styles-compiled.css";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import salvationArmyPic from "./salvationArmyPic.jpg";
import shaPic from "./shaPic.png";
import charityLogo1 from "./charityLogo1.png";

const { Content, Footer } = Layout;
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;

class Donations extends Component {
  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
      value: 1
    });
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  handleNumber = e => {
    this.setState({
      number: e.target.value
    });
  };

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleExpiry = e => {
    this.setState({
      expiry: e.target.value
    });
  };

  handleCvc = e => {
    this.setState({
      cvc: e.target.value
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      number: 1234567891011121,
      name: "Default Name",
      expiry: "03/23",
      cvc: "094",
      focused: "",
      visible: false
    }; //this is how you set up state
  }
  render() {
    return (
      <div className="dashboard-content2">
        <div style={{ width: "800px", height: "1200px" }}>
          <p>
            Donations goes a long way in combatting homelessness. Thank you for
            your generosity!
          </p>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <Col span={10} style={{ width: "200px" }}>
              <img
                alt="example"
                style={{ width: "50%", height: "auto" }}
                src={salvationArmyPic}
              />
              <Radio value={1}>Salvation Army</Radio>
            </Col>
            <Col span={10} style={{ width: "200px" }}>
              <img
                alt="example"
                style={{ width: "130px", height: "120px" }}
                src={shaPic}
              />
              <Radio value={2}>SJSU SHA</Radio>
            </Col>
            <Col span={10} style={{ width: "200px" }}>
              <img
                alt="example"
                style={{ width: "60%", height: "120px" }}
                src={charityLogo1}
              />
              <Radio value={3}>LSRH Charity</Radio>
            </Col>
          </RadioGroup>
          <div style={{ marginLeft: "-28px" }}>
            <Col span={10}>
              <Cards
                number={this.state.number}
                name={this.state.name}
                expiry={this.state.expiry}
                cvc={this.state.cvc}
                focused={this.state.focused}
              />
            </Col>
            <Col span={10}>
              <Col
                span={16}
                style={{ paddingTop: "5px", paddingBottom: "10px" }}
              >
                <Input
                  defaultValue={this.state.number}
                  onChange={this.handleNumber}
                />
              </Col>

              <Col span={16} style={{ paddingBottom: "10px" }}>
                <Input
                  defaultValue={this.state.name}
                  onChange={this.handleName}
                />
              </Col>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={11}>
                    <Input
                      defaultValue={this.state.expiry}
                      onChange={this.handleExpiry}
                    />
                  </Col>
                  <Col span={5} style={{ marginLeft: "3px" }}>
                    <Input
                      defaultValue={this.state.cvc}
                      onFocus={this.handleInputFocus}
                      onChange={this.handleCvc}
                    />
                  </Col>
                </Row>
              </InputGroup>
              <Row gutter={8}>
                <Col span={11} style={{ marginTop: "10px" }}>
                  <Input defaultValue={"Amount: $5.00"} />
                </Col>
                <Col span={3}>
                  <Button
                    type="default"
                    shape="round"
                    size="medium"
                    onClick={this.showModal}
                    style={{
                      backgroundColor: "#4784a8",
                      borderRadius: "5px",
                      paddingTop: "5px",
                      paddingBottom: "6px",
                      paddingRight: "5px",
                      paddingLeft: "3px",
                      marginTop: "10px",
                      marginLeft: "2px",
                      color: "white"
                    }}
                  >
                    Donate
                  </Button>
                  <Modal
                    title="Thank you for your donation!"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <p>Thank you for your donation!</p>
                  </Modal>
                </Col>
              </Row>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default Donations;
