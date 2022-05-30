/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("First test with Rahul", () => {
  it("visit site", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('input[class="search-keyword"]').type("ca");
    cy.get(".product:visible").should("have.length", 4); // how to get only visible elements
    cy.get(".products").as("productLocator"); // allias

    cy.get("@productLocator").find(".product").should("have.length", 4); // parent child chaining
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("First product is added");
      }); //click on specific element and then manualy resolve promise (bc cypress is asyncronus i want to this console.log be printed here, not before everytning)
    // cy.contains("ADD TO CART"); // search the entire page to find
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();

        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").should("have.text", "GREENKART");
    cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });
  });
});
