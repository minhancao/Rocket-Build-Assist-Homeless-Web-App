import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import CustomLayout from "./components/layout/CustomLayout";
import Dashboard from "./components/dashboard/Dashboard";

import Donations from "./pages/Donations";
import Identify from "./pages/Identify";
import Resources from "./pages/Resources";
import Statistics from "./pages/Statistics";
import Stories from "./pages/Stories";

const DefaultContainer = () => (
  <div>
    <CustomLayout>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/donations" component={Donations} />
      <Route exact path="/identify" component={Identify} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/statistics" component={Statistics} />
      <Route exact path="/stories" component={Stories} />
    </CustomLayout>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route component={DefaultContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
