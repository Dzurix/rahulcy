Feature: Portal login

    //ovo je Precondition ili Preduslov koji je vezan samo za ovaj fajl (u ovom fajlu jc biti prvi izvrsen)
    Background: Preduslov
        Given validate the browser
        When Browser is trigered
        Then check if browser is started


    @PortalTest
    Scenario: Home page default login

        Given User is on NetBanking landing page
        When User login into application with "jin" and password "1234"
        Then Home page is populated
        And Cards displayed are "true"

    @PortalTest
    Scenario: Home page default login

        Given User is on NetBanking landing page
        When User login into application with "john" and password "4321"
        Then Home page is populated
        And Cards displayed are "false"

    @PortalTest
    Scenario: Home page default login

        Given User is on NetBanking landing page
        When User sign up with following details
            | jenny | smith | john@abcd.com | Australia | 202315 |
        Then Home page is populated
        And Cards displayed are "false"

    @PortalTest
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


