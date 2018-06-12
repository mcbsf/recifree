Feature: Forum
	As a system administrator
	I want to create, update and remove topics
	And sort topics according to date and alphabetical order
	So that I can easily manage and visualize the forum

Scenario: Sort topics by date successfull controller
	Given the system has the topics "1st topic" with date "2018-06-10"
	And "2nd topic" with date "2018-06-11" stored
	When I try to "sorte by date"
	Then "1st topic" appears before "2nd topic"

Scenario: Create topic with empty title controller
	Given the system has no topics stored
	When I create a topic entitled ""
	Then the topic is not stored by the system

Scenario: Create topic successfull controller
	Given the system has no topic entitled "1st topic"
	When I create a topic with title "1st topic"
	Then the topic is properly stored by the system

Scenario: Edit topic empty title controller
	Given the system has a topic entitled "1st topic"
	When I try to edit "1st topic" title to ""
	Then the topic is left unmodified