import React, { Component } from "react";
import { Icon, Layout } from "antd";
import background from "./background.jpg"; // relative path to image
import lefthalf from "./lefthalf.jpg"; // relative path to image
import { Link } from "react-router-dom";

const { Content, Footer } = Layout;

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-content">
        <div>
          <div
            style={{
              // height: "800px",
              width: "100%",
              backgroundColor:"white",
              //backgroundColor: "#4784a8",
              paddingTop: "20px",
              textAlign: "center"
            }}
          >
          <div style={{
              // marginRight: "20%",
              // marginLeft: "20%",
              textAlign:"center",
              color:"rgba(0, 0, 0, 0.65)",
              fontFamily: "Open Sans",
              fontSize: "60px",
            }}
          >
          <b><i>Assist</i></b>
          <br></br>
          </div>
            <div
              style={{
                // width: "800px",
                // height: "800px",
                display: "inline-block",
                marginRight: "20%",
                marginLeft: "20%"
              }}
            >
              <Link
                className="button-item"
                to="/resources"
                style={{
                  color:"rgba(0, 0, 0, 0.65)",
                  fontFamily: "Open Sans",
                  fontSize: "40px",
                  // width: "500px",
                  letterSpacing: "1.5px",
                  textTransform: "none",
                  backgroundColor: "white",
                  // marginLeft:"20%"
                  // paddingLeft: "100px",
                  paddingRight: "100px"
                }}
              >
                Food
              </Link>
              <Link
                className="button-item"
                to="/resources"
                style={{
                  color:"rgba(0, 0, 0, 0.65)",
                  fontFamily: "Open Sans",
                  fontSize: "40px",
                  // width: "500px",
                  letterSpacing: "1.5px",
                  textTransform: "none",
                  backgroundColor: "white",
                  // marginRight:"20%"
                  paddingLeft: "100px",
                  // paddingRight: "100px"
                }}
              >
                Jobs
              </Link>
            </div>
            <p class="dashboardBody">
              <br></br>
              <p>
              If you are in need of food or work, please press the respective button.
              </p>
              <br></br>
              <p>
                "Give a Man a Fish, and You Feed Him for a Day. Teach a Man To Fish, and You Feed Him for a Lifetime"
              </p>
              <br></br>
              <p >
                  <b><i>Our Mission</i></b> is to help lessen the hardship of those going through homelessness.
                  If you are in need of assistance, please access the resources page. If you would like to help,
                  please access the statistics page and help us identify those in need.
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
