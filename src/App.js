import React, { Component } from "react";

class App extends Component {
  state = {
    password: "",
    clicked: false,
    validate: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick="validate()">검증하기</button>
      </div>
    );
  }
}

export default App;
