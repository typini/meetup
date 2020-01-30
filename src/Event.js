import React, { Component } from 'react';

class Event extends Component {
  constructor () {
    super();
    this.state = {
      detailsAreHidden: true
    };
  }

  toggleDetails = ((e) => {
    this.setState({
      detailsAreHidden: !this.state.detailsAreHidden
    })
  });

  render() {
    return (
      <div className="event">
        <div className="time">Time Goes Here.</div>
        <div className="date">Date Goes Here.</div>
        <div className="title">Title Goes Here.</div>
        <div className="group">Group Goes Here.</div>
        <div className="attendeeCount">Attendee Count Goes Here.</div>
        {!this.state.detailsAreHidden && <Details />}
        <button type="button" value="details" className="detailsButton" onClick={this.toggleDetails.bind(this)}>Details</button>
      </div>
    );
  }
}

const Details = () => {
  <div className="eventDetails">
    All the details and Descriptions go here.
  </div>
}

export default Event;
