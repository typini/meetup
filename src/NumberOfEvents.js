import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventCount: 0
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventCount: value});
  }

  render() {
    return (
      <div className="numberOfEvents">
        <span>Show</span>
        <input className="eventBox" type="textbox" value={this.state.eventCount} onChange={this.handleInputChanged} />
        <span>Events</span>
      </div>
    );
  }
}

export default NumberOfEvents;
