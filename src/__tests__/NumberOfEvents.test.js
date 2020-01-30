import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('verify that a textbox exists to display events shown', () =>{
    expect(NumberOfEventsWrapper.find('.eventBox')).toHaveLength(1);
  });

  test('counts the number of events in the selected city', () => {
    const eventObject = {target: { value: '4' }};
    NumberOfEventsWrapper.find('.eventBox').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe('4');
  });

});
