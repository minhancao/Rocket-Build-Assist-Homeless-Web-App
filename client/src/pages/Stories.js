import React, { Component } from "react";
import {
  Icon,
  Layout,
  Card,
  Row,
  Col,
  DatePicker,
  Statistic,
  Avatar
} from "antd";
import storyPic1 from "./storyPic1.jpg";
import storyPic2 from "./storyPic2.jpg";
import storyPic3 from "./storyPic3.jpg";

const { Content, Footer } = Layout;

const { Meta } = Card;

const sampleData = [
  {
    title: "Kind Stranger Helps Homeless Man On Street",
    date: "2019-03-02",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam",
    img: storyPic1
  },
  {
    title: "Homeless Man Helps Lady Get Back Her Purse",
    date: "2019-02-02",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam",
    img: storyPic2
  },
  {
    title: "Homeless Woman Helps Dog On Street",
    date: "2019-01-02",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam",
    img: storyPic3
  }
];

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: sampleData
    }; //this is how you set up state
  }

  componentDidMount() {
    console.log(Object.values(this.state.stories));
  }
  render() {
    return (
      <div className="dashboard-content2">
        <div style={{ width: "800px" }}>
          <h1 style={{ fontFamily: "Montserrat" }}>STORIES</h1>
          <div style={{ align: "left" }}>
            <Row gutter={16} style={{ width: 1400 }}>
              {Object.keys(this.state.stories).map(key => (
                <Col span={8}>
                  <Card
                    style={{ width: 400 }}
                    cover={
                      <img
                        alt="example"
                        style={{ height: "300px" }}
                        src={this.state.stories[key]["img"]}
                      />
                    }
                    actions={[<Icon type="read" />, <Icon type="share-alt" />]}
                  >
                    <Meta
                      title={this.state.stories[key]["title"]}
                      extra={this.state.stories[key]["date"]}
                      description={this.state.stories[key]["content"]}
                    />{" "}
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Stories;
