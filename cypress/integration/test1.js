/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("First test with Rahul", () => {
  it("visit site", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('input[class="search-keyword"]').type("ca");
    cy.get(".product:visible").should("have.length", 4); // how to get only visible elements
    cy.get(".products").find(".product").should("have.length", 4); // parent child chaining
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click(); //click on specific element
    // cy.contains("ADD TO CART"); // search the entire page to find
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();

        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
  });
});
