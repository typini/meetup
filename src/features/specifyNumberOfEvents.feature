Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
Given I entered the city I would like to search.
When I expect to see upcoming events, but not too many.
Then I will expect the view to limit the number of events displayed until I want to see more.

Scenario: User can change the number of events they want to see
Given I was limited by the number of events displayed on my screen.
When I want to see more.
Then I will choose an option that enables viewing more search results.
