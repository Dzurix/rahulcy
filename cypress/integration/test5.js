/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("Fifth test with Rahul", () => {
  it("Tables and columns selecting", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('[class="table-display"] tr td:nth-child(2)').each(
      ($el, index, $list) => {
        const course = $el.text();

        if (course.includes("Python")) {
          cy.get('[class="table-display"] tr td:nth-child(2)')
            .eq(index)
            .next()
            .then(function (price) {
              const priceText = price.text();
              expect(priceText).to.equal("25");
            });
        }
      }
    );
  });
});
