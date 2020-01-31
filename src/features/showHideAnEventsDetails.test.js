import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

 test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('Search results returned.', () => {
          AppWrapper = mount(<App />);
        });

        when('I expect to see a brief overview of events.', () => {
          AppWrapper.update();
          expect(AppWrapper.find('.event').length).toBeGreaterThan(0);
        });

        then('I will decide which events to open to see more information.', () => {
          AppWrapper.find('.details-btn').at(0).simulate('click');
          expect(AppWrapper.find('.eventDetails').length).toBeGreaterThan(0);
        });
    });

 test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('A collapsed event brief appeared on screen.', () => {
          AppWrapper = mount(<App />);
        });

        when('I want to open it.', () => {
          AppWrapper.update();
          expect(AppWrapper.find('.event').length).toBeGreaterThan(0);
        });

        then('I will click to expand its details.', () => {
          AppWrapper.find('.details-btn').at(0).simulate('click');
          expect(AppWrapper.find('.eventDetails').length).toBeGreaterThan(0);
        });
    });

 test('User can collapse an event to hide its details', ({ given, when, then }) => {

        let AppWrapper;
        given('An event opened to display all its details.', () => {
          AppWrapper = mount(<App />);
        });

        when('I no longer wish to see its details.', () => {
          AppWrapper.update();
          expect(AppWrapper.find('.event').length).toBeGreaterThan(0);
          AppWrapper.find('.details-btn').at(1).simulate('click');
          expect(AppWrapper.find('.eventDetails').length).toBeGreaterThan(0);
        });

        then('I will collapse the event details.', () => {
          AppWrapper.find('.details-btn').at(1).simulate('click');
          expect(AppWrapper.find('eventDetails').length).toBe(0);
        });
    });

});
