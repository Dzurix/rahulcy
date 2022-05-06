/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("Register", () => {
  it("register a new user", () => {
    const username = "visitoring";
    const email = "upoje@glisic.com";
    const password = "visitor";

    cy.visit("https://react-redux.realworld.io/");

    //REGISTERING
    // cy.contains("a.nav-link", "Sign up").click();
    // cy.get('[placeholder="Username"]').type(username);
    // cy.get('[placeholder="Email"]').type(email);
    // cy.get('[placeholder="Password"]').type(password);

    // cy.get('[type="submit"]').click();

    cy.location("pathname").should("equal", "/register");

    //LOGIN with wrong credentials

    cy.contains("a.nav-link", "Sign in").click();
    cy.get('[placeholder="Email"]').type("upoje@lol.com");
    cy.get('[placeholder="Password"]').type("blagoje");
    cy.get('[type="submit"]').click();
    cy.contains(".error-messages li", "email or password is invalid");

    // LOGIN with good credentials

    // cy.get('[placeholder="Email"]').type(email);
    // cy.get('[placeholder="Password"]').type(password);
    // cy.get('[type="submit"]').click();
  });
});
