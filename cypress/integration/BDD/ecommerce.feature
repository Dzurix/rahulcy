Feature: End to end Ecommerce validation

application Regresion
@Regresion
Scenario: Ecomerce products delivery
Given I open EComerce Page
When I add items to Cart
And Validate the total prices
Then Select the country sumbit and verify Thank you message

@Smoke
Scenario: Filing the form to shop
Given I open EComerce Page
When I fill the form details
|name|gender|
|bobz|Male|
Then validate the forms behaviour
And select the Shop Page
