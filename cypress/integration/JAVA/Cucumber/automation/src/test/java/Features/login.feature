Feature: Application login




    @WebTest @SmokeTest
    Scenario: Home page default login

        Given User is on NetBanking landing page
        When User login into application with "jin" and password "1234"
        Then Home page is populated
        And Cards displayed are "true"

    @SmokeTest
    Scenario: Home page default login

        Given User is on NetBanking landing page
        When User login into application with "john" and password "4321"
        Then Home page is populated
        And Cards displayed are "false"

    @MobileTest
    # //ako se Background ne odnosi na ovaj scenario, onda koristimo HOOKS
    Scenario: Home page default login

        Given User is on NetBanking landing page
        When User sign up with following details
            | jenny | smith | john@abcd.com | Australia | 202315 |
        Then Home page is populated
        And Cards displayed are "false"

    @SanityTest
    Scenario Outline: Parametarization
        // kada hocu parametarizaciju , onda mora da bude 'Scenario Outline'

        Given User is on NetBanking landing page
        When User login in to application with <Username> and password <Password>
        Then Home page is populated
        And Cards displayed are "true"

        Examples:
            | Username | Password |
            | user1    | pass1    |
            | user2    | pass2    |
            | user3    | pass3    |
            | user4    | pass4    |
