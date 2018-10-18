import React, { Component } from "react";
import NewsList from "./Subcomponents/NewsList";
import axios from "axios";
import { URL } from "../Strings";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
      activePage: 1,
      count: 0
    };
  }
  requestNews = start => {
    start -= 1;
    axios
      .get(`${URL}/posts?_start=${start}&_limit=5&_sort=identificador:desc`)
      .then(res => {
        this.setState({ news: res.data });
      });
  };
  componentDidMount() {
    axios.get(`${URL}/posts/count`).then(res => {
      this.setState({ count: res.data });
    });
    this.requestNews(1);
  }
  changePage = x => {
    this.setState({ activePage: x });
    this.requestNews(x);
  };
  render() {
    if (this.state.news == null) return null;

    return (
      <div className="content">
        <div className="container">
          <div className="row row-offcanvas row-offcanvas-left">
            <NewsList
              news={this.state.news}
              changePage={this.changePage}
              activePage={this.state.activePage}
              count={this.state.count}
            />
          </div>
        </div>
      </div>
    );
  }
}
