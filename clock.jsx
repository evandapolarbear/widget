import React from 'react';

class Clock extends React.Component{
  constructor(props) {
    super(props);

    this.state = {day: new Date()};
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTime.bind(this), 1000);
  }

  updateTime(){
    this.setState({day: new Date()});
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  render () {
    return(
      <div>
        <h2>Date: {this.state.day.toDateString()}</h2>
        <h2>Time: {this.state.day.getHours()}:{this.state.day.getMinutes()}:{this.state.day.getSeconds()}</h2>
      </div>
    );
  }
}

export default Clock;
