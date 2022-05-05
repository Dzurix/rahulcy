/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("My first test with Adithi", () => {
  it("test url works", () => {
    cy.visit("https://react-redux.realworld.io/");
  });
});
