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
        <span className="time">{this.props.event.local_time}</span>
        <span>&nbsp;-&nbsp;</span>
        <span className="date">{this.props.event.local_date}</span>
        <div className="title">{this.props.event.name}</div>
        <div className="group">GROUP:&nbsp;{this.props.event.group.name}</div>
        <div className="attendeeCount">{this.props.event.yes_rsvp_count} in attendance so far</div>
        {!this.state.detailsAreHidden &&
          <div className="eventDetails">
            <a href={this.props.event.link} className="eventLink">{this.props.event.link}</a>
            <div className="eventDescription">{this.props.event.description}</div>
          </div>
        }
        <button type="button" value="details" className="details-btn" onClick={this.toggleDetails.bind(this)}>Details</button>
      </div>
    );
  }
}

export default Event;
