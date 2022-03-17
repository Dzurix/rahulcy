/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("Forth test with Rahul", () => {
  it("Getting popups", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //POP UPS

    cy.get("#alertbtn").click();
    cy.get("#confirmbtn").click();
    // Window:alert  - catching the popups, but still we wont see it
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    //CHILD TABS

    //cy.get("#opentab").click();

    cy.get("#opentab").invoke("removeAttr", "target").click();

    //CHECKING are we on the right web page

    cy.url().should("include", "rahulshettyacademy");

    // USING BACK AND FORWARD browser button

    cy.go("back");
  });
});
