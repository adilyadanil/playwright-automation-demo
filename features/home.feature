@tc1
Feature: Search functionality on OpenCart demo

    Scenario: Search for a product
        Given I am on the OpenCart demo homepage
        When I search for "MacBook"
        Then I should see the search results for "MacBook"
