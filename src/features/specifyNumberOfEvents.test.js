import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppWrapper;
        given('I entered the city I would like to search.', () => {
          AppWrapper = mount(<App />);
          AppWrapper.find('.city').simulate('change', { target: { value: 'Munich' }  });
        });

        when('I expect to see upcoming events, but not too many.', () => {
          AppWrapper.update();
        });

        then('I will expect the view to limit the number of events displayed until I want to see more.', () => {
          expect(AppWrapper.find('.event').length).toBeLessThan(33);
        });
    });

 test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('I was limited by the number of events displayed on my screen.', () => {
          AppWrapper = mount(<App />);
        });

        when('I want to see more.', () => {

        });

        let NumberOfEventsWrapper;
        let updatePage = () => {};
        then('I will choose an option that enables viewing more search results.', () => {
          NumberOfEventsWrapper = shallow(<NumberOfEvents updatePage={updatePage} />);
          NumberOfEventsWrapper.find('.eventBox').simulate('change', { target: { value: '50' } });
//          expect(NumberOfEventsWrapper.find('.eventBox').value).toBe('50');
        });
    });

});
