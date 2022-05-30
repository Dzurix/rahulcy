/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
//alsways first reference, then anytning else
"use strict";

import "cypress-iframe";
import { find } from "lodash";

describe("Eight test with Rahul", () => {
  it("Handling frames", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");
    cy.iframe().find('a[href="#/mentorship"]').eq(0).click();
    cy.iframe()
      .find('h1[class="pricing-title text-white ls-1"]')
      .should("have.length", 2);
  });
});
