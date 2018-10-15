import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import TopBar from "./Components/Navbar/TopBar";
import BreadCumbs from "./Components/Navbar/BreadCumbs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <TopBar />
          <Navbar />
          <BreadCumbs />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={News} exact path="/news" />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
