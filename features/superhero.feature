Feature: I create a new profile

  Scenario Outline: Superhero.com
  Scenario:  Create and Profile
    Given I am on superhero.com page
    When I click Login with web wallet
    When I Generate a new wallet
    Then I should verify "My Profile" is visible in the left pane
    Then I should click on "My Profile" in the left pane
    Then I should be able to change location to "Bangalore"
    Then I should be able to save
    Then I should be able to upload profile photo
    Then I should be able to verify that location is set to "Bangalore"
    
    Scenario:  Add And Reply to a comment
    Given I am on superhero.com page
    Then I should click on "Tips" in the left pane
    When I search a post with string "Live Aeid"
    Then I should be able to add comment "Test Automation New" on the first post  
    Then I should click on "Tips" in the left pane
    When I search a post with string "Live Aeid"
    Then I should be able to add reply to the first comment with "Reply Test Automation"

    Scenario:  Allow/disallow cookies from 3rd party providers
    Given I am on superhero.com page
    Then I should click on "Tips" in the left pane
    When I search a post with string "Youtube"
    Then is should be able to play the third party video

    Scenario: Extension
    Given I am on superhero wallet page