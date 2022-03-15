/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("Third test with Rahul", () => {
  it("Getting checkboxes", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    cy.get('input[type="checkbox"]').check(["option1", "option2"]);

    // STATIC DROPDOWN

    cy.get("select").select("option2").should("have.value", "option2");
    // DINAMIC DROPDOWN
    cy.get("#autocomplete").type("yug");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "Yugoslavia") {
        cy.wrap($el).click();
      }
    });
    // CHECKING DINAMIC DROPDOWN

    cy.get("#autocomplete").should("have.value", "Yugoslavia");

    // VISIBLE PART OF PAGE

    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    // RADIO buttons
    cy.get('[value="radio2"]').check().should("be.checked");
  });
});
