import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    errorText: ''
  }

  handleInputChanged = (e) => {
    this.props.updatePage(e.target.value);
    if(e.target.value < 1){
      this.setState({
        errorText: 'Number should be at least 1'
      });
    } else {
      this.setState({
        errorText: ''
      });
    }
  }

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <span>Show</span>
        <input className="eventBox" id="eventBox" type="number" value={this.props.page} onChange={this.handleInputChanged.bind(this)} />
        <span>Events</span>
      </div>
    );
  }
}

export default NumberOfEvents;
