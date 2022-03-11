/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("First test with Rahul", () => {
  it("visit site", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('input[class="search-keyword"]').type("ca");
    cy.get(".product:visible").should("have.length", 4); // how to get only visible elements
  });
});
