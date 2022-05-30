/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("Seventh test with Rahul", () => {
  it("Handling child windows", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then(function (el) {
      const newUrl = el.prop("href");
      cy.log(newUrl);
      cy.visit(newUrl);
    });
  });
});
