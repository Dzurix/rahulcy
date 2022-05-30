/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("Sixt test with Rahul", () => {
  it("Handling mouse hover popups", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
