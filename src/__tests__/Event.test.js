import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe ('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('verify that an event shows a time', () => {
    expect(EventWrapper.find('.time')).toHaveLength(1);
  });

  test('verify that an event shows the date', () => {
    expect(EventWrapper.find('.date')).toHaveLength(1);
  });

  test('verify that an event shows a title', () => {
    expect(EventWrapper.find('.title')).toHaveLength(1);
  });

  test('verify that an event shows a group', () => {
    expect(EventWrapper.find('.group')).toHaveLength(1);
  });

  test('verify that an event shows a details button', () => {
    expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
  });

  test('verify that details appear when button is clicked', () => {
    EventWrapper.find('.detailsButton').simulate('click');
    expect(EventWrapper.state('detailsAreHidden')).toBe(false);
  });

});
