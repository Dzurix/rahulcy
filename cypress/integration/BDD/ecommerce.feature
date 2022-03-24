Feature: End to end Ecommerce validation

application Regresion

Scenario: Ecomerce products delivery
Given I open EComerce Page
When I add items to Cart
And Validate the total prices
Then Select the country sumbit and verify Thank you message