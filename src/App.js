import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api.js';
import { InfoAlert } from './Alert';
import moment from 'moment';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    page: 32
  };

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i++) {
      if (this.state.events[i].local_date === date) {
        count++;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();
    for (let i = 0; i < 7; i++){
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count});
    }
    return next7Days;
  }

  updatePage = (value) => {
    this.setState({ page: value });
  }

  updateEvents = (lat, lon) => {
    getEvents(this.state.page, lat, lon).then(events => this.setState({ events }));
  }

  componentDidMount() {
    getEvents(this.state.page).then(events => this.setState({ events }));
    if (!navigator.onLine){
      this.setState({
        infoText: 'You are not connected to the internet.  Information may not be up-to-date.'
      });
    } else {
      this.setState({
        infoText: ''
      });
    }
  }

  render () {
    return (
      <div className="App">
        <InfoAlert text={this.state.infoText} />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updatePage={this.updatePage.bind(this)} page={this.state.page} />
        <ResponsiveContainer height={400}>
          <ScatterChart
            margin={{
              top: 12, right: 12, bottom: 12, left: 12
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
