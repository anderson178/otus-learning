import React, { Component } from "react";

import { ClickButton } from "./ClickButton";

interface Prop {
  buttonName: string;
}

interface State {
  value: string;
  count: number;
}

export class ShowButton extends Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = { value: "", count: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });

    alert(
      "Value line: " +
        this.state.value +
        " \nNumber of button presses: " +
        this.state.count
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <ClickButton
          handleSubmit={this.handleSubmit}
          nameButton={this.props.buttonName}
        />
      </form>
    );
  }
}
