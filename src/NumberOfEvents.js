import React, { Component } from 'react';

class NumberOfEvents extends Component {

  handleInputChanged = (e) => {
    this.props.updatePage(e.target.value)
  }

  render() {
    return (
      <div className="numberOfEvents">
        <span>Show</span>
        <input className="eventBox" id="eventBox" type="number" value={this.props.page} onChange={this.handleInputChanged.bind(this)} />
        <span>Events</span>
      </div>
    );
  }
}

export default NumberOfEvents;
