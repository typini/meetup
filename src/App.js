import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api.js';

class App extends Component {
  state = {
    events: [],
    page: 32
  };


  updatePage = (value) => {
    this.setState({ page: value });
  }

  updateEvents = (lat, lon) => {
    getEvents(this.state.page, lat, lon).then(events => this.setState({ events }));
  }

  componentDidMount() {
    getEvents(this.state.page).then(events => this.setState({ events }));
  }

  render () {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updatePage={this.updatePage.bind(this)} page={this.state.page} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
