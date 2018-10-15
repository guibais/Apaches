import React, { Component } from "react";
import axios from "axios";

import MainSlider from "./Subcomponents/MainSlider";
import MainMatch from "./Subcomponents/MainMatch";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partidas: null
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:1337/partidas`).then(res => {
      this.setState({ partidas: res.data });
    });
  }
  render() {
    if (this.state.partidas == null) return null;
    return (
      <React.Fragment>
        <MainSlider
          penultimaPartida={this.state.partidas[1]}
          ultimaPartida={this.state.partidas[0]}
        />
        <MainMatch partidas={this.state.partidas} />
      </React.Fragment>
    );
  }
}
