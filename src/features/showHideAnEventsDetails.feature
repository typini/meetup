Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
Given Search results returned.
When I expect to see a brief overview of events.
Then I will decide which events to open to see more information.

Scenario: User can expand an event to see its details
Given A collapsed event brief appeared on screen.
When I want to open it.
Then I will click to expand its details.

Scenario: User can collapse an event to hide its details
Given An event opened to display all its details.
When I no longer wish to see its details.
Then I will collapse the event details.
