import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100,
      hour: new Date(),
      showTimer: true,
    };
    this.hideTimer = this.hideTimer.bind(this);
  }

  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
    this.TimeID = setInterval(() => this.currentTime());
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.TimeID);
  }

  componentDidUpdate() {
    if (this.state.time === 0 && this.state.showTimer === true) {
      this.componentWillUnmount();
      this.hideTimer();
    }
  }

  currentTime() {
    this.setState({
      hour: new Date(),
    });
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
    });
  }

  hideTimer() {
    this.setState({
      showTimer: !this.state.showTimer,
    });
  }

  render() {
    if (this.state.showTimer === true) {
      return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Sekarang jam - {this.state.hour.toLocaleTimeString()}.</h2>
          <h2>Hitung mundur: {this.state.time}</h2>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default Timer;
