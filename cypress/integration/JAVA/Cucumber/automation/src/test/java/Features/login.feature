Feature: Application login


Scenario: Home page default login

Given User is on NetBanking landing page
When user login into application with username and password
Then home page is populated
And Cards are displayed