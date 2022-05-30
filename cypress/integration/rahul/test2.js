/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("Second test with Rahul", () => {
  it("Checkout", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('input[class="search-keyword"]').type("ca");

    cy.get(".products").as("productLocator"); // allias

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();

        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get('[alt="Cart"]').click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
